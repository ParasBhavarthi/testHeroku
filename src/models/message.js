import mongoose from "mongoose"

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectID,
    ref: "User"
  },
  createdDateTime: {
    type: Date,
    required: true,
    index: true
  }

});

messageSchema.statics.getHistory = async function () {
  return this.find().sort({createdDateTime: 1}).populate('creator')
};

const Message = mongoose.model("Message", messageSchema);

export default Message;