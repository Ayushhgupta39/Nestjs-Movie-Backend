import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './movie.entity';

@Controller('movies')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get()
  async getAllMovies(): Promise<Movie[]> {
    return await this.movieService.getAllMovies();
  }

  @Get('genre/:genre')
  async getMoviesByGenre(@Param('genre') genre: string): Promise<Movie[]> {
    return await this.movieService.getMoviesByGenre(genre);
  }

  @Put(':id/rate')
  async rateMovie(
    @Param('id') id: number,
    @Body('rating') rating: number,
  ): Promise<Movie> {
    return await this.movieService.rateMovie(id, rating);
  }

  @Get('sorted-by-rating')
  async getMoviesSortedByRating(): Promise<Movie[]> {
    return await this.movieService.getMoviesSortedByRating();
  }
}
