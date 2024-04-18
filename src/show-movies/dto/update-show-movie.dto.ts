import { PartialType } from '@nestjs/mapped-types';
import { CreateShowMovieDto } from './create-show-movie.dto';

export class UpdateShowMovieDto extends PartialType(CreateShowMovieDto) {}
