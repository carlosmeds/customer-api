import { Module } from '@nestjs/common';
import { PostsController } from 'src/presentation/controllers/client-controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, PostsController],
  providers: [AppService],
})
export class AppModule {}
