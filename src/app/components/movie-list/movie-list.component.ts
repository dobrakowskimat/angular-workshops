import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}
  movies$: Observable<Movie[]>;
  inputValue: string;
  today: Date = new Date();
  isInEditMode: boolean;
  movieToEdit: null;

  dummyMovie: Movie = {
    director: 'Angular Super Students',
    id: 2777,
    genres: ['drama', 'comedy'],
    releaseDate: this.today,
    title: 'Super Film about Angular',
  };

  ngOnInit() {
    this.today = new Date();
    this.movies$ = this.moviesService.getMovies().pipe(
      map((movies) => {
        return movies.filter((u) => u.id > 2);
      }),
    );
  }

  compareName(firstElement: User, secondElement: User) {
    if (firstElement.lastName < secondElement.lastName) {
      return -1;
    }
    if (firstElement.lastName > secondElement.lastName) {
      return 1;
    }
    return 0;
  }

  warnUser() {
    alert('You clicked me you bastard!');
  }

  addmovie() {
    this.isInEditMode = true;
  }

  cancelAdding() {
    this.isInEditMode = false;
  }

  addDummyMovie() {
    this.moviesService.addMovie(this.dummyMovie).subscribe();
  }

  deleteMovie(movie: Movie) {
    console.log(movie);
  }
}
