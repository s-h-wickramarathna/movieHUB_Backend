import { Module } from '@nestjs/common';
import { ShowMoviesService } from './show-movies.service';
import { ShowMoviesController } from './show-movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from 'src/movies/entities/movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  controllers: [ShowMoviesController],
  providers: [ShowMoviesService],
})
export class ShowMoviesModule {}
