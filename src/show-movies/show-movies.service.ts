import { Injectable } from '@nestjs/common';
import { CreateShowMovieDto } from './dto/create-show-movie.dto';
import { UpdateShowMovieDto } from './dto/update-show-movie.dto';

@Injectable()
export class ShowMoviesService {
  create(createShowMovieDto: CreateShowMovieDto) {
    return 'This action adds a new showMovie';
  }

  findAll() {
    return `This action returns all showMovies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} showMovie`;
  }

  update(id: number, updateShowMovieDto: UpdateShowMovieDto) {
    return `This action updates a #${id} showMovie`;
  }

  remove(id: number) {
    return `This action removes a #${id} showMovie`;
  }
}
