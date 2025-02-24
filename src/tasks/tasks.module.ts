import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { MiddlewareMiddleware } from './middleware/middleware.middleware';
import { Mid2Middleware } from './mid2/mid2.middleware';
// import { PrismaModule } from 'src/prisma.module';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService,PrismaService],
})
export class TasksModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(MiddlewareMiddleware)
      .forRoutes(
        {
          path: '/tasks',
          method: RequestMethod.GET,
        },
        {
          path: '/tasks',
          method: RequestMethod.POST,
        },
      )
      .apply(Mid2Middleware)
      .forRoutes('tasks');
  }
}
