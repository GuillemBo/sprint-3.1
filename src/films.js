const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const directors = array.map(movies => movies.director)
  let result = directors
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  return array.filter(movie => movie.director === director)
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const moviesDirector = array.filter(movie => movie.director === director)
  let scores = moviesDirector.reduce((total, movie) => total + movie.score, 0)
  let averageScore = scores / moviesDirector.length;
  return parseFloat(averageScore.toFixed(2))
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const order = array.slice().sort((a, b) => (a.title > b.title ? 1 : -1))
  const titles = order.map(movie => movie.title)
  const topTwenty = titles.slice(0, 20)
  return topTwenty
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const order = array.slice().sort((a, b) => (a.year > b.year ? 1 : -1))
  return order
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const movieGenre = array.filter(movie => movie.genre.includes(genre))
  let scores = movieGenre.reduce((total, current) => total + current.score, 0)
  let average = scores / movieGenre.length
  return parseFloat(average.toFixed(2))
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

  function convertirMinutos(duration) {

      const regex = /(\d+)h\s*(\d+)min/;
      const regexHours = /(\d+)h/;
      const matches = duration.match(regex)
      const matchesHours = duration.match(regexHours)

      if (matches) {
          const hours = parseInt(matches[1], 10);
          const minutes = parseInt(matches[2], 10);
          return (hours * 60) + minutes
      } else if (matchesHours){
          const hours2 = parseInt(matchesHours[1], 10);
          return hours2 * 60
      } else {
          return null
      }
  }

  return array.map(movie => {
      const durationMinutes = convertirMinutos(movie.duration)
      return {...movie, duration: durationMinutes}
      
  })

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const moviesByYear = array.filter(movie => movie.year == year)
  const bestScore = moviesByYear.reduce((previous, current) => {
      if (current.score > previous.score) {
          return current
      } else {
          return previous
      }
  })
  return [bestScore]

}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
