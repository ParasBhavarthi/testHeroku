$(document).ready(function () {

  adjustMessageWindowSize();
  const socket = io();

  $(window).keydown(function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      $('#sendButton').click();
      return false;
    }
  });

  socket.emit('firstMessage');
  socket.on('messageList', function (data) {
    const messageList = JSON.parse(data);
    console.log(messageList);
    for (let i in messageList) {
      const sender = messageList[i].creator.username;
      const txtMessage = messageList[i].text;
      const time = messageList[i].createdDateTime;
      const displayMessage = getMessageLi(sender, getCurrentDateAndTime(time), txtMessage);
      $('#messages').append(displayMessage)

    }
    scrollListToBottom($('#messages').outerHeight())

  });

  socket.on('newMessage', function (data) {
    console.log(data);
    const message = JSON.parse(data);
    console.log(message);
    const sender = message.creator.username;
    const txtMessage = message.text;
    const time = message.createdDateTime;
    const displayMessage = getMessageLi(sender, getCurrentDateAndTime(time), txtMessage);
    $('#messages').append(displayMessage);

    scrollListToBottom($('#messages').outerHeight())

  });
  $("button").click(function () {
    const text = $("#text");
    if (text.val() === "") {
      return;
    }
    const txtMessage = text.val();
    text.val("");
    socket.emit('createMessage', txtMessage);
  });

  function getMessageLi(sender, time, message) {
    var displayMessage;
    displayMessage = '<li id="li" class = "alert alert-dismissible alert-primary"> <h6>' + sender + ' | ' + time + '</h6>'
      + message + '</li>';
    return displayMessage;
  }

  function getCurrentDateAndTime(date) {
    let now = new Date(date);
    let mm = now.getMonth() + 1;
    let dd = now.getDate();
    let yyyy = now.getFullYear();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hours + ':' + minutes + ampm;
    return mm + "/" + dd + "/" + yyyy + " " + strTime;
  }

  function adjustMessageWindowSize() {
    let chatWindowY = $("#message").position().top;
    let inputBoxHeight = $("#inputBox").height();
    $('#message').css("height", window.innerHeight - chatWindowY - inputBoxHeight - 20);
  }

  function scrollListToBottom(scrollheight) {
    $("#message").scrollTop(scrollheight);
  }
});

