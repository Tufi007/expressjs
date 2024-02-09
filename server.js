const mongoose= require('mongoose');
const dotenv= require('dotenv');

dotenv.config({path:'./config.env'})
const app = require('./app');
mongoose.connect(process.env.CONN_STR).then((conn)=> {
  // console.log(conn);
  console.log("sucessfull connented");
});

// let testmovie= new Movie(
//   {
//     name: "helllooooooooooooooo",
//     description: "own movies",
//     duration: 2342564,
//     ratings: 4.5
//   }
// );
// testmovie.save().then((doc)=>{
//   console.log(doc);
// }).catch((err)=>{
//   console.log(err);
// })
const port = process.env.PORT;
//  console.log(process.env);
app.listen(port, (req, res) => {
    console.log("hello");
    console.log(process.env.port);
   
  });