
const express = require('express');
const fs = require('fs');
// let data = JSON.parse(fs.readFileSync("./data.json"))
let movie= require('./../model/moviemodel');
const { error } = require('console');

 exports.getallmovies = async (req, res) => {
    // res.json({
    //   status: "success",
    //   data: {
    //     data: data,
    //   },
    // });
   try{
    const data= await movie.find();
    res.status(200).json({
        status: "sent",
        data: data
    })
   }
   catch{
    res.json(error);
   }
  };
 exports.addmovie =async (req, res) => {

    // res.send(req.body);
    // let idnew = data[data.length - 1].id * 1;
    // const newmovie = Object.assign({ id: idnew }, req.body);
    // data.push(newmovie);
    // updatedata(data);
    try{const data= await movie.create(req.body);
    res.status(200).json({
      status:"sucess",
      data: data
    });}
    catch(err){
      res.status(400).json({
        status:"fail",
        data: err.message
      })
    }
    
  };
  // const updatedata = function (movies) {
  //   const newdata = movies;
  //   let moviedata = JSON.stringify(newdata);
  //   fs.writeFileSync("./data.json", moviedata);
  // };