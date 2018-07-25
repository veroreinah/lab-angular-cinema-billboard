import { Component, OnInit } from '@angular/core';
import { Movie, MoviesService } from 'services/movies.service';

@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.css'],
  providers: [ MoviesService ]
})
export class MyhomeComponent implements OnInit {

  movies: Array<Movie>;

  constructor(private moviesServ: MoviesService) { }

  ngOnInit() {
    this.movies = this.moviesServ.getMovies();
  }

}
