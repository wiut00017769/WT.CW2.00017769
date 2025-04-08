const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/styles', express.static(path.join(__dirname, 'public', 'styles')));
app.use('/javascripts', express.static(path.join(__dirname, 'public', 'javascripts')));
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});
app.get('/user/register', (req, res) => {
  res.render('user/register', { title: 'User Registration' });
});

const flashcardsWebRoutes = require('./routes/web/flashcards');
app.use('/flashcards', flashcardsWebRoutes);
const userWebRoutes = require('./routes/web/user');
app.use('/user', userWebRoutes);

const flashcardsApiRoutes = require('./routes/api/flashcards');
app.use('/api/flashcards', flashcardsApiRoutes);
const userApiRoutes = require('./routes/api/user');
app.use('/api/user', userApiRoutes);

const webRoutes = require('./routes/web');
app.use('/', webRoutes);
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});




