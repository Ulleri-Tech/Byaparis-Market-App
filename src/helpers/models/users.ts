import mongoose from "mongoose";


export const User = mongoose.model('User', new mongoose.Schema({
  fullname: {type: String, default:''},
  email: {type: String, required:true},
  password: {type: String, required:true},
  lastLogin:{type:String}
}));