const express = require('express');
const core = require('cors')
const app = express();
const {readdirSync} = require('fs')
app.use(core());
    
readdirSync('./Routes').map((r)=>app.use('/api',require('./Routes/'+r)));

app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000/");
})