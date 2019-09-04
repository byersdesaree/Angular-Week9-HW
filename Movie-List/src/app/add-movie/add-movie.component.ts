import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  movieForm=this.fb.group({
    title:[''],
    description:[''],
    image:['']
  })

  constructor(private movieService:MoviesService, private fb:FormBuilder) { 
    this.movieService=movieService;
    console.log(this.movieForm)
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.movieForm);
    const title =this.movieForm.value.title;
    const description = this.movieForm.value.description;
    const image=this.movieForm.value.image;
    this.movieService.addMovie(title, description,image)
  }

}
