const express = require('express'), 
  morgan = require('morgan');

const app = express();

app.use(morgan('common'));

let topMovies = [
    {
        title: '2001: A Space Odyssey',
        genre: 'Science Fiction'
    },
    {
        title: 'The Godfather',
        genre: 'Thriller'
    },
    {
        title: 'Citizen Kane',
        genre: 'Drama'
    },
    {
        title: 'Raiders of the Lost Ark',
        genre: 'Action'
    },
    {
        title: "Singin' in the Rain",
        genre: 'Comedy'
    },
    {
        title: 'Goodfellas',
        genre: 'Thriller'
    },
    {
        title: 'North by Northwest',
        genre: 'Thriller'
    },
    {
        title: 'The Dark Knight',
        genre: 'Action'
    },
    {
        title: 'Beau Travail',
        genre: 'Drama'
    },
    {
        title: 'The Searchers',
        genre: 'Action'
    },
];

app.get('/movies', (req, res) => {
    res.json(topMovies);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.use(express.static('public'));

app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});