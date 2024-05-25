import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  genre: string;

  @Column({ default: 0 })
  rating: number;

  static initialMovies: Movie[] = [
    { id: 1, title: 'The Shawshank Redemption', genre: 'Drama', rating: 9 },
    { id: 2, title: 'The Godfather', genre: 'Crime', rating: 8 },
    { id: 3, title: 'The Dark Knight', genre: 'Action', rating: 9 },
  ];
}
