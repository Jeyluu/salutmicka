const express = require('express');
const app = express();

//CONTROLERS
app.get('/', (req,res) => {
    res.send('Connecté')
})

app.listen(5000, () => {
    console.log('Connecté au port 5000');
})