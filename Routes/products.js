const express = require('express');
const router = express.Router();

router.get('/products',(req,res)=>{
    res.send({meesage:"Hello world"})
})

module.exports = router;