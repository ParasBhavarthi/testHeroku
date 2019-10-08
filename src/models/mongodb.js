import mongoose from "mongoose"

const uri = "mongodb+srv://hongyu:9Ghwcw4mCVsmQLEw@cluster0-mzwic.gcp.mongodb.net/esn?retryWrites=true&w=majority";
const connectDB = () => {
  return mongoose.connect(uri);
};
export {connectDB}