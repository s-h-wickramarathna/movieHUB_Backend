import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { Like, Repository } from 'typeorm';
import { SearchMovieDTO } from './dto/search-movie-dto';

@Injectable()
export class MoviesService {

  constructor(@InjectRepository(Movie) private movieRepository: Repository<Movie>) { }

  async create(file: Express.Multer.File, createMovieDto: CreateMovieDto) {
    const movieUrl = `http://localhost:3000/${file.path}`;
    const updatedUrl = movieUrl.replace(/\\/g, '/');

    const existMovie = await this.movieRepository.findOne({
      where: [
        { name: createMovieDto.name },
      ],
    });

    if (existMovie) {
      return "This Movie Already Exist";

    } else {

      const movie = this.movieRepository.create({
        name: createMovieDto.name,
        img: updatedUrl,
        description: createMovieDto.description,
        duration: createMovieDto.duration,
        released: createMovieDto.released,
        countries: createMovieDto.countries,
        genre: createMovieDto.genre,
        cast: createMovieDto.cast,
        production: createMovieDto.production,
        status_id: createMovieDto.status_id,
      });

      await this.movieRepository.save(movie);

      return movie;
    }
  }

  async findAll(): Promise<Movie[]> {
    return await this.movieRepository.find();
  }

  async findOne(searchMovieDto: SearchMovieDTO): Promise<Movie[]> | undefined {

    const movieName: string = searchMovieDto.searchText;
    console.log(searchMovieDto.searchText)

    try {
      const movies = await this.movieRepository.find({
        where: [
          { name: Like(`%${movieName}%`) },
        ]
      });

      if (movies) {
        console.log('Found Movie:', movies);
        return movies;
      } else {
        console.log('Movie not found');
        return undefined;
      }
    } catch (error) {
      console.error('Error while searching for Movie:', error);
      return undefined;
    }

  }

  async update(id: string, file: Express.Multer.File, updateMovieDto: UpdateMovieDto) {
    const movieUrl = `http://localhost:3000/${file.path}`;
    const updatedUrl = movieUrl.replace(/\\/g, '/');

    try {
      const existMovie = await this.movieRepository.findOne({
        where: [
          { id: parseInt(id) },
        ],
      });

      if (existMovie) {

        existMovie.name = updateMovieDto.name;
        existMovie.img = updatedUrl;
        existMovie.description = updateMovieDto.description;
        existMovie.duration = updateMovieDto.duration;
        existMovie.released = updateMovieDto.released;
        existMovie.countries = updateMovieDto.countries;
        existMovie.genre = updateMovieDto.genre;
        existMovie.cast = updateMovieDto.cast;
        existMovie.production = updateMovieDto.production;
        existMovie.status_id = updateMovieDto.status_id;

        const updatedMovie = this.movieRepository.save(existMovie);
        return updateMovieDto;

      } else {
        return "Movie Not Found";
      }
    } catch (error) {
      console.log(error);

    }

  }

  async changeStatus(id: number) {
    try {

      const existMovie = await this.movieRepository.findOneBy({ id });

      if (!existMovie) {
        return undefined;
      }

      if(existMovie.status_id == 1){
        existMovie.status_id = 2;

      }else{
        existMovie.status_id = 1;
      }

      const updatedUser = this.movieRepository.save(existMovie);
      return updatedUser;

    } catch (error) {
      console.error('Error while updating user:', error);
      return undefined;
    }
  }
}
