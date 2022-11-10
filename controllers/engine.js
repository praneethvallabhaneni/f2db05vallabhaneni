var Engine = require('../models/engine'); 
 
// List of all Costumes 
exports.engine_list = async function(req, res) { 
    try{ 
        theEngines = await Engine.find(); 
        res.send(theEngines); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// VIEWS 
// Handle a show all view 
exports.engine_view_all_Page = async function(req, res) { 
    try{ 
        theEngines = await Engine.find(); 
        res.render('engines', { title: 'Engine Search Results', results: theEngines }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// for a specific Costume. 
exports.engine_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Engine detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.engine_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Engine(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.bikeType = req.body.bikeType; 
    document.Cylinders = req.body.Cylinders; 
    document.FuelType = req.body.FuelType;
    document.Transmission = req.body.Transmission; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Costume delete form on DELETE. 
exports.engine_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Engine delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.engine_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Engine update PUT' + req.params.id); 
};