import { Repository } from 'typeorm';
import { Movie } from './movie.entity';
import { CustomRepository } from 'src/database/typeorm-ex.decorator';

@CustomRepository(Movie)
export class MovieRepository extends Repository<Movie> {
  async getAllMovies(): Promise<Movie[]> {
    return await this.find();
  }
}
