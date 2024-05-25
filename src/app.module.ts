import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieController } from './movies/movie.controller';
import { MovieService } from './movies/movie.service';
import { MovieRepository } from './movies/movie.repository';
import { TypeOrmExModule } from './database/typeorm-ex.module';
import { Movie } from './movies/movie.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'ayush',
      password: 'ayush',
      database: 'movie_db',
      autoLoadEntities: true,
      entities: [Movie],
      synchronize: false,
    }),
    TypeOrmExModule.forCustomRepository([MovieRepository]),
    TypeOrmModule.forFeature([MovieRepository]),
  ],
  controllers: [AppController, MovieController],
  providers: [AppService, MovieService],
})
export class AppModule {}
