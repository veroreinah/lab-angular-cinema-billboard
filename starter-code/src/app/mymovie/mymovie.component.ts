import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Movie, MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-mymovie',
  templateUrl: './mymovie.component.html',
  styleUrls: ['./mymovie.component.css'],
  providers: [ MoviesService ]
})
export class MymovieComponent implements OnInit {

  movie: Movie;

  constructor(private moviesServ: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => this.movie = this.moviesServ.getMovie(Number(params["id"])));
  }

}
