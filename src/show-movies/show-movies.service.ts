import { Injectable } from '@nestjs/common';
import { CreateShowMovieDto } from './dto/create-show-movie.dto';
import { UpdateShowMovieDto } from './dto/update-show-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from 'src/movies/entities/movie.entity';

@Injectable()
export class ShowMoviesService {
  constructor(@InjectRepository(Movie) private movieRepository: Repository<Movie>){}

  findAll() {
    const movies = this.movieRepository.find({ where: { status_id: 1 } });
    return movies;
  }

}
