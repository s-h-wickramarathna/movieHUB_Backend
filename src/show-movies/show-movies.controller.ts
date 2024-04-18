import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShowMoviesService } from './show-movies.service';
import { CreateShowMovieDto } from './dto/create-show-movie.dto';
import { UpdateShowMovieDto } from './dto/update-show-movie.dto';

@Controller('show-movies')
export class ShowMoviesController {
  constructor(private readonly showMoviesService: ShowMoviesService) {}

  @Post()
  create(@Body() createShowMovieDto: CreateShowMovieDto) {
    return this.showMoviesService.create(createShowMovieDto);
  }

  @Get()
  findAll() {
    return this.showMoviesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.showMoviesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShowMovieDto: UpdateShowMovieDto) {
    return this.showMoviesService.update(+id, updateShowMovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.showMoviesService.remove(+id);
  }
}
