import mongoose from "mongoose";
import bcrypt from "bcrypt";
import {UserNotExistError} from "../errors";

const saltRounds = 10;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    index: true
  },
  password: String,
  onlineStatus: {
    type: String,
    enum: ["ONLINE", "OFFLINE"],
    default: "ONLINE"
  },
  lastUpdatedDateTime: Date

});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

userSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.setOnline = async function (username) {
  const currentDate = new Date();
  return this.update(
    {username: username, lastUpdatedDateTime: {$lt: currentDate}},
    {onlineStatus: "ONLINE", lastUpdatedDateTime: currentDate}
  );
};

userSchema.statics.setOffline = async function (username) {
  const currentDate = new Date();
  return this.update(
    {username: username, lastUpdatedDateTime: {$lt: currentDate}},
    {onlineStatus: "OFFLINE", lastUpdatedDateTime: currentDate}
  );
};

userSchema.statics.setAllOffline = async function () {
  return this.updateMany(
    {},
    {onlineStatus: "OFFLINE", lastUpdatedDateTime: new Date()}
  )
};

userSchema.statics.getDirectory = async function () {
  return this.find().sort({
    onlineStatus: -1,
    username: 1
  })
};

userSchema.statics.getUserByUsername = async function (username) {
  return this.findOne({username}).then(user => {
    if (!user) {
      throw new UserNotExistError();
    }
    return user;
  })
};

const User = mongoose.model("User", userSchema);

export default User;
