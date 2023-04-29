import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies = [
      { title: 'Harry Potter and the Philosopher\'s Stone', year: '2001', genre: 'Fantasy', director: 'Chris Columbus', rating: 7.6 },
      { title: 'Spider-Man: No Way Home', year: '2021', genre: 'Action, Adventure, Sci-Fi', director: 'Jon Watts', rating: 8.9 },
      { title: 'The Dark Knight', year: '2008', genre: 'Action, Crime, Drama', director: 'Christopher Nolan', rating: 9.0 },
      { title: 'The Shawshank Redemption', year: '1994', genre: 'Drama', director: 'Frank Darabont', rating: 9.3 },
      { title: 'Forrest Gump', year: '1994', genre: 'Drama, Romance', director: 'Robert Zemeckis', rating: 8.8 },
      { title: 'Inception', year: '2010', genre: 'Action, Adventure, Sci-Fi', director: 'Christopher Nolan', rating: 8.8 },
      { title: 'The Lord of the Rings: The Fellowship of the Ring', year: '2001', genre: 'Action, Adventure, Drama', director: 'Peter Jackson', rating: 8.8 },
      { title: 'The Matrix', year: '1999', genre: 'Action, Sci-Fi', director: 'Lana Wachowski, Lilly Wachowski', rating: 8.7 },
      { title: 'The Godfather', year: '1972', genre: 'Crime, Drama', director: 'Francis Ford Coppola', rating: 9.2 },
      { title: 'Pulp Fiction', year: '1994', genre: 'Crime, Drama', director: 'Quentin Tarantino', rating: 8.9 },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
