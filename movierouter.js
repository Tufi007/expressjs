const express= require('express');
let Controller = require('./controller/routeController');
let router = express.Router();
router.route('/').get(Controller.getallmovies);
router.route('/add').post(Controller.addmovie);
module.exports = router;