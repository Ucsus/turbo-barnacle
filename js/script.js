"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколько его оцените?", "");

        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personaMovieDB.movies[a] = b;
            console.log("Done");
        } else {
            console.log("Error");
            i--; // вернуться на одну итерацию назад
        }

    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personaMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personaMovieDB.count >= 10 && personaMovieDB.count < 30) {
        console.log("Круто");
    } else if (personaMovieDB.count >= 30) {
        console.log("Ну охуеть теперь!");
    } else {
        console.log("Ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personaMovieDB);
    }
}

showMyDB(personaMovieDB.privat);

function writeYourGenres() {
    for (let i=1; i <=3; i++) {
            personaMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();