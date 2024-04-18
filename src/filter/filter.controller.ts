import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FilterService } from './filter.service';
import { MovieFilterDto } from './dto/movie-filter.dto';

@Controller('filter')
export class FilterController {
  constructor(private readonly filterService: FilterService) {}

  @Post()
  filter(@Body() movieFilterDto: MovieFilterDto) {
    return this.filterService.filter(movieFilterDto);
  }

 
}
