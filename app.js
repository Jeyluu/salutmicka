const express = require('express');
const path = require('path');
const app = express();

// EJS
app.set('view engine', 'ejs');


//DOSSIER STATIC PUBLIC
app.use(express.static(path.join(__dirname,'public')));


//ROUTE
const articles = require('./routes/articlesRoute')

//CONTROLERS
app.use('/liste-des-articles', articles)



app.get('/', (req,res) => {
    res.send('Connecté')
})

app.listen(5000, () => {
    console.log('Connecté au port 5000');
})