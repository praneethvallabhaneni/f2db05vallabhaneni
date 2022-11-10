// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('engines', { title: 'Search Results bikes' });
// });

// module.exports = router;
var express = require('express'); 
const engine_controlers= require('../controllers/engine'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', engine_controlers.engine_view_all_Page ); 
module.exports = router; 