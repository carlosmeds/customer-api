import { Module } from '@nestjs/common';
import { CustomerController } from 'src/presentation/controllers/customer-controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, CustomerController],
  providers: [AppService],
})
export class AppModule {}
