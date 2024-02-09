const mongoose= require('mongoose');
const movieschema = mongoose.Schema({
    name:{
      type:String,
      required:[true ,'name required'],
      unique:true
    },
    description:String,
    duration:Number,
    ratings:{
      type: Number,
      default: 1.08}
  });
  const Movie = mongoose.model('movietaufeeq',movieschema);
  module.exports= Movie;