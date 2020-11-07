"use strict"


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
    }
    
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// Этот процесс автоматизирован

function rememberMyFilms(){
for (let i=0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[a] = b;

    if(a != null && b != null && a != '' && b != '' && a.length < 50){
        console.log('done');
    } else {
        console.log('error');
       i--
    }
}
}
rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count <= 10){
        console.log('слишком мало фильмов');
    } else if(personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        console.log('вы любитель');
    } else if(personalMovieDB.count > 30){
        console.log('вы киноман');
    } else {
        console.log('ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
   for (let i = 1; i<=3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
   }
}
writeYourGenres();