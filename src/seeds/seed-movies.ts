import { Movie } from '../movies/movie.entity';
import { DataSource } from 'typeorm';

export const seedMovies = async (dataSource: DataSource) => {
  const movieRepository = dataSource.getRepository(Movie);

  const initialMovies = Movie.initialMovies;

  // Clear existing movies
  await movieRepository.clear();

  // Insert initial movies
  await movieRepository.save(initialMovies);

  console.log('Movies seeded successfully!');
};
