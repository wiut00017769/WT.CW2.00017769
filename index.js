const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));//set folders locations

app.use('/styles', express.static(path.join(__dirname, 'public', 'styles')));
app.use('/javascripts', express.static(path.join(__dirname, 'public', 'javascripts')));
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));//middleware to parse json and url encoded bodies if not already presented

app.get('/', (req, res) => {
    res.render('index');
});//home route render index.pug

app.get('/user/register', (req, res) => {
    res.render('user', { title: 'User Registration' });//registration page route
});

const flashcardsWebRoutes = require('./routes/web/flashcards');
app.use('/flashcards', flashcardsWebRoutes);//flashcards web routes 

const flashcardsApiRoutes = require('./routes/api/flashcards');
app.use('/api/flashcards', flashcardsApiRoutes);//flashcards api routes

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

  



