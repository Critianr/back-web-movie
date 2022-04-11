const express = require('express');
const router = express.Router();


// peticion post req/ el que me trae la informacion
router.post('/listVistas:id', async (req, res)=>{
    const body = req.body; 
    const list = await new listSchema(body);
    await list.save();
    res.json({status: 'task saved'});
    console.log(ticket)
});




module.exports = router;
