import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { MoviesModule } from './movies/movies.module';
import { Movie } from './movies/entities/movie.entity';
import { DashboardModule } from './dashboard/dashboard.module';
import { FilterModule } from './filter/filter.module';
import { ShowMoviesModule } from './show-movies/show-movies.module';
import { Review } from './movies/entities/review.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'movieHUB',
      entities: [
        User,
        Movie,
        Review
      ],
      synchronize: false,
    }),
    UsersModule,
    MoviesModule,
    DashboardModule,
    FilterModule,
    ShowMoviesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
