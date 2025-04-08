const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));//set folders locations

app.use('/styles', express.static(path.join(__dirname, 'public', 'styles')));
app.use('/javascripts', express.static(path.join(__dirname, 'public', 'javascripts')));
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

app.get('/', (req, res) => {
  res.render('index');
});//home route render index.pug

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

