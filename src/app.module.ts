import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CustomerController } from 'src/presentation/controllers/customer-controller';
import { AuthMiddleware } from './presentation/middlewares/auth-middleware';

@Module({
  imports: [],
  controllers: [CustomerController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('/');
  }
}
