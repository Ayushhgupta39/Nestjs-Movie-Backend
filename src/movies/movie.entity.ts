import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  genre: string;

  @Column({ type: 'float', default: 0 })
  rating: number;

  @Column({ type: 'float', nullable: true })
  userRating: number | null;

  static initialMovies: Movie[] = [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      genre: 'Drama',
      rating: 9,
      userRating: 9,
    },
    { id: 2, title: 'The Godfather', genre: 'Crime', rating: 8, userRating: 9 },
    {
      id: 3,
      title: 'The Dark Knight',
      genre: 'Action',
      rating: 9,
      userRating: 9,
    },
    { id: 4, title: 'Pulp Fiction', genre: 'Crime', rating: 8, userRating: 8 },
    { id: 5, title: 'Forrest Gump', genre: 'Drama', rating: 7, userRating: 8 },
    { id: 6, title: 'Inception', genre: 'Sci-Fi', rating: 8, userRating: 8 },
    { id: 7, title: 'Fight Club', genre: 'Drama', rating: 6, userRating: 7 },
    { id: 8, title: 'The Matrix', genre: 'Sci-Fi', rating: 9, userRating: 9 },
  ];
}
