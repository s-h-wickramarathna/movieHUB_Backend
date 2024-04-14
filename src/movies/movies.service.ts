import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  create(file: Express.Multer.File, createMovieDto: CreateMovieDto) {
    const movieUrl = `http://localhost:3000/${file.path}`;
    // Save movie URL to MySQL database
    // const savedMovie = await this.movieRepository.save({ url: movieUrl });

    const updatedUrl = movieUrl.replace(/\\/g, '/');

    const movie = {
      url: updatedUrl,
      dto: createMovieDto
    }

    return movie;
  }

  findAll() {
    return `This action returns all movies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movie`;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
