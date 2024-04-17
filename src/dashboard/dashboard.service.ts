import { Injectable } from '@nestjs/common';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';
import { UsersService } from 'src/users/users.service';
import { MoviesService } from 'src/movies/movies.service';

@Injectable()
export class DashboardService {

  constructor(
    private readonly usersService: UsersService,
    private readonly movieService: MoviesService
  ){}

  async findAll() {
    const user = await this.usersService.getActive_AllUsers();
    const movie = await this.movieService.getActive_AllMovies();

    return {user,movie};
  }

}
