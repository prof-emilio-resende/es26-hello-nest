import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ImcModule } from './imc/imc.module';
import { RootModule } from './root/root.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { ImcController } from './imc/imc.controller';

@Module({
  imports: [RootModule, ImcModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(ImcController);
  }
}
