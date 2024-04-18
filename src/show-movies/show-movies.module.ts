import { Module } from '@nestjs/common';
import { ShowMoviesService } from './show-movies.service';
import { ShowMoviesController } from './show-movies.controller';

@Module({
  controllers: [ShowMoviesController],
  providers: [ShowMoviesService],
})
export class ShowMoviesModule {}
