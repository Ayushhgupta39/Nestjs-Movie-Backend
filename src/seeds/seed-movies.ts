import { Movie } from '../movies/movie.entity';
import { DataSource } from 'typeorm';

export const seedMovies = async (dataSource: DataSource) => {
  const movieRepository = dataSource.getRepository(Movie);

  const initialMovies = Movie.initialMovies;

  await movieRepository.clear();

  await movieRepository.save(initialMovies);

  console.log('Movies seeded successfully!');
};
