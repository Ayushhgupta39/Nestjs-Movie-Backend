import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './movie.entity';
import { MovieRepository } from './movie.repository';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieRepository)
    private movieRepository: MovieRepository,
  ) {}

  async getAllMovies(): Promise<Movie[]> {
    return await this.movieRepository.getAllMovies();
  }

  async getMoviesByGenre(genre: string): Promise<Movie[]> {
    return await this.movieRepository.getMoviesByGenre(genre);
  }

  async rateMovie(id: number, rating: number): Promise<Movie> {
    return await this.movieRepository.rateMovie(id, rating);
  }

  async getMoviesSortedByRating(): Promise<Movie[]> {
    return await this.movieRepository.getMoviesSortedByRating();
  }
}
