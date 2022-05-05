import { Module } from '@nestjs/common';
import { CustomerController } from 'src/presentation/controllers/client-controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, CustomerController],
  providers: [AppService],
})
export class AppModule {}
