import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({})
export class MoviesModule {
  constollers: [MoviesController];
  providers: [MoviesService];
}
