"use strict"


const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

const personalMovieDB = {
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


    if(personalMovieDB.count <= 10){
        console.log('слишком мало фильмов');
    } else if(personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        console.log('вы любитель');
    } else if(personalMovieDB.count > 30){
        console.log('вы киноман');
    } else {
        console.log('ошибка');
    }
console.log(personalMovieDB);