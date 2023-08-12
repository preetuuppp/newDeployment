const mongoose = require("mongoose");
const connection = mongoose.connect(
  "mongodb+srv://preetikushwaha0110:kushwaha@cluster0.lx2vm2y.mongodb.net/?retryWrites=true&w=majority"
);
const userSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    address: String,
    city: String,
    mobileNo: Number,
    gender: String,
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("userDetails", userSchema);

module.exports = {
  connection,
  UserModel,
};
