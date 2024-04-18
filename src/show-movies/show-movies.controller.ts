import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShowMoviesService } from './show-movies.service';
import { CreateShowMovieDto } from './dto/create-show-movie.dto';
import { UpdateShowMovieDto } from './dto/update-show-movie.dto';

@Controller('show-movies')
export class ShowMoviesController {
  constructor(private readonly showMoviesService: ShowMoviesService) {}


  @Get()
  findAll() {
    return this.showMoviesService.findAll();
  }

}
