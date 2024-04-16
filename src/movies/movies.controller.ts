import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, HttpException, HttpStatus, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { SearchMovieDTO } from './dto/search-movie-dto';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  findAll(): Promise<Movie[]> {
    return this.moviesService.findAll();
  }

  @Get('search')
  findOne(@Query() searchMovieDto: SearchMovieDTO): Promise<Movie[]> | undefined {
    return this.moviesService.findOne(searchMovieDto);
  }

  @Post('upload')
   @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads/movies',
      filename: (req, file, cb) => {
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
        return cb(null, `${randomName}${extname(file.originalname)}`);
      }
    }),
    fileFilter: (req, file, cb) => {
      if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return cb(new Error('Only jpg, jpeg, png image files are allowed'), false);
      }
      cb(null, true);
    },
    limits: {
      fileSize: 1024 * 1024 * 10, // 10MB
    },
  }))

  async uploadMovie(@UploadedFile() file: Express.Multer.File, @Body() creatMovieDto: CreateMovieDto) {
    if (!file) {
      throw new HttpException('File is required', HttpStatus.BAD_REQUEST);
    }
    const movie = await this.moviesService.create(file, creatMovieDto);
    return movie;
  }

    @Patch('update/:id')
    @UseInterceptors(FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/movies',
        filename: (req, file, cb) => {
          const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        }
      }),
      fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
          return cb(new Error('Only jpg, jpeg, png image files are allowed'), false);
        }
        cb(null, true);
      },
      limits: {
        fileSize: 1024 * 1024 * 10, // 10MB
      },
    }))
  async updateMovie(@Param('id') id: string, @UploadedFile() file: Express.Multer.File, @Body() updateMovieDto: UpdateMovieDto){
    if (!file) {
      throw new HttpException('File is required', HttpStatus.BAD_REQUEST);
    }
    const movie = await this.moviesService.update(id, file, updateMovieDto);
    return movie;
  }

  @Get('changeStatus/:id')
  changeStatus(@Param('id') id: number) {
    return this.moviesService.changeStatus(+id);
  }

  }



  
