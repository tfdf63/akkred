'use strict';

let  number0fFilms;

function start() {
    number0fFilms = +prompt ('Сколько посмотрели?', '');

    while(number0fFilms == '' || number0fFilms == null || isNaN(number0fFilms)) {
        number0fFilms = +prompt ('Сколько посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    generes: {},
    private: false
};

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB);