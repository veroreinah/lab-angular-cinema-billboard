import { Injectable } from '@angular/core';
import { movies } from '../sample-movies';

export interface Movie {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  genres: Array<string>;
  year: number;
  director: string;
  actors: Array<string>;
  hours: Array<string>;
  room: number;
}

@Injectable()
export class MoviesService {

  movies: Array<Movie>;

  constructor() {
    this.movies = movies;
  }

  getMovies() {
    return this.movies;
  }

  getMovie(id) {
    return this.movies.filter(e => e.id === id).pop();
  }

}
