import User from "../models/user"
import Message from "../models/message";
import jwt from "jsonwebtoken";
import cookie from 'cookie';
import secrets from "../../example.secrets";

const commonIo = (io) => {
  io.use(function (socket, next) {
    socket.handshake.headers.cookie = cookie.parse(socket.handshake.headers.cookie);
    if (socket.handshake.headers.cookie.token) {
      jwt.verify(socket.handshake.headers.cookie.token, secrets.TOKEN_KEY, function (err, decoded) {
        if (err) return next(new Error('Authentication error'));
        socket.username = decoded.username;
        next();
      });
    } else {
      next(new Error('Authentication error'));
    }
  });

  io.on('connection', (socket) => {
    const username = socket.username;
    User.setOnline(username).then(() => {
      return User.getDirectory();
    }).then(userList => {
      io.emit("userList", JSON.stringify(userList));
    }).catch(err => {
      console.log(err)
    });

    socket.on('disconnect', () => {
      const username = socket.username;
      User.setOffline(username).then(() => {
        return User.getDirectory();
      }).then(userList => {
        io.emit("userList", JSON.stringify(userList));
      }).catch(err => {
        console.log(err)
      });
    });

    socket.on('firstMessage', () => {
      Message.getHistory().then(messageList => {
        socket.emit('messageList', JSON.stringify(messageList));
      }).catch(err => {
        console.log(err);
      });
    });

    socket.on('createMessage', (text) => {
      User.getUserByUsername(socket.username).then(user => {
        const message = new Message({text: text, creator: user, createdDateTime: new Date()});
        return message.save();
      }).then(message => {
        io.emit("newMessage", JSON.stringify(message))
      }).catch(err => {
        console.log(err);
      })
    })
  });
};

export default commonIo;