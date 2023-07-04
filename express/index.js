const express = require('express'), 
  morgan = require('morgan');

const app = express();

app.use(morgan('common'));

let movies = [];

let users = [];

app.get('/', (req, res) => {
    res.send('Welcome to my movie app!');
});

app.get('/movies', (req, res) => {
    res.send('Successful GET request returning a list of ALL movies');
});

app.get('/movies/:title', (req, res) => {
    res.send('Successful GET request returning data on a single movie by title');
});

app.get('/movies/genres/:genre', (req, res) => {
    res.send('Successful GET request returning data on a single genre by name');
});

app.get('/movies/directors/:director', (req, res) => {
    res.send('Successful GET request returning data on a single director by name');
});

app.post('/users', (req, res) => {
    res.send('Successful POST request registering new user');
});

app.put('/users/:username', (req, res) => {
    res.send('Successful PUT request updating user\'s username');
});

app.post('/users/:username/movies/:favorites', (req, res) => {
    res.send('Successful POST request adding a movie to a user\'s list of favorites');
});

app.delete('/users/:username/movies/:favorites', (req, res) => {
    res.send('Successful DELETE request removing a a movie from a user\'s list of favorites');
});

app.delete('/users/:username', (req, res) => {
    res.send('Successful DELETE request removing existing user');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.use(express.static('public'));

app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});