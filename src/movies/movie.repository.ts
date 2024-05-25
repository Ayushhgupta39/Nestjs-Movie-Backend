import { Repository, ILike } from 'typeorm';
import { Movie } from './movie.entity';
import { CustomRepository } from 'src/database/typeorm-ex.decorator';

@CustomRepository(Movie)
export class MovieRepository extends Repository<Movie> {
  async getAllMovies(): Promise<Movie[]> {
    return await this.find();
  }

  async getMoviesByGenre(genre: string): Promise<Movie[]> {
    return await this.find({ where: { genre: ILike(`%${genre}%`) } });
  }

  async rateMovie(id: number, userRating: number): Promise<Movie | null> {
    const movie = await this.findOne({ where: { id } });

    if (!movie) {
      return null;
    }

    if (!movie.rating) {
      movie.rating = userRating;
    } else {
      const totalRatings = movie.rating + userRating;
      const numberOfRatings = movie.userRating ? 2 : 1;
      movie.rating = totalRatings / numberOfRatings;
    }

    movie.userRating = userRating;
    return await this.save(movie);
  }

  async getMoviesSortedByRating(): Promise<Movie[]> {
    return await this.find({ order: { rating: 'DESC' } });
  }
}
