var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var engine_controller = require('../controllers/engine'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/engines', engine_controller.engine_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/engines/:id', engine_controller.engine_delete); 
 
// PUT request to update Costume. 
router.put('/engines/:id', engine_controller.engine_update_put); 
 
// GET request for one Costume. 
router.get('/engines/:id', engine_controller.engine_detail); 
 
// GET request for list of all Costume items. 
router.get('/engines', engine_controller.engine_list); 
 
module.exports = router;