import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { seedMovies } from './seeds/seed-movies';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const dataSource = app.get(DataSource);

  await seedMovies(dataSource);
  await app.listen(3000);
}
bootstrap();
