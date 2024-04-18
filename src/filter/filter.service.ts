import { Injectable } from '@nestjs/common';
import { MovieFilterDto } from './dto/movie-filter.dto';
import { MoviesService } from 'src/movies/movies.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from 'src/movies/entities/movie.entity';
import { Repository } from 'typeorm';


@Injectable()
export class FilterService {

   constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  filter(movieFilterDto: MovieFilterDto) {
    const {name, year, country, Date} = movieFilterDto;

    const query = this.movieRepository
      .createQueryBuilder('movie')
      .where('movie.name LIKE :name', { name: `%${name}%` })
      .andWhere('movie.released LIKE :releasedYear', { releasedYear: `${year}%` })
      .andWhere('movie.countries LIKE :countries', { countries: `%${country}%` })
      .orderBy('movie.released', 'DESC');

    return query.getMany();

  }

}
