import { Component, OnInit } from '@angular/core';
import { MoviesService, Movie } from '../movies.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  movies: Movie[] = [];
  newMovieTitle:string="";
  newMovieText: string = "";
  newMovieImage:string="";
  movieIdsBeingEdited = {};
  movieBeingDisplayed: Movie;

  constructor(private moviesService: MoviesService) {
    this.moviesService = moviesService;
  }

  ngOnInit() {
    this.getMovies();
  }

  onDeleteMovie(i: number) {
    this.moviesService.deleteMovie(i);
    this.getMovies();
  }
  onCreateNewMovie(newMovie: string) {
    this.moviesService.addMovie(newMovie,"","");
    this.newMovieTitle=" ";
    this.newMovieText = " ";
    this.newMovieImage=" ";
    this.getMovies();
  }

  onStartEditMovie(i: number) {
    this.movieIdsBeingEdited[i] = true;
  }
  onSaveEditMovie(i: number) {
    this.movieIdsBeingEdited[i] = false;
  }

  getMovies(){
    setTimeout(()=>{
      this.movies=this.moviesService.getMovies();
    },0);
  }

  onViewMovieDetails(movie:Movie) {
this.movieBeingDisplayed=movie;
  }
}
