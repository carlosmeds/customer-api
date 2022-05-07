import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CustomerController } from 'src/presentation/controllers/customer-controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthMiddleware } from './presentation/middlewares/auth-middleware';

@Module({
  imports: [],
  controllers: [AppController, CustomerController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('/');
  }
}
