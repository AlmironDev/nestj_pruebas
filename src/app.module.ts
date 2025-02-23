import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { MainController } from './main/main.controller';

@Module({
  imports: [ProjectsModule, AuthModule, UsersModule, TasksModule],
  controllers: [AppController, MainController],
  providers: [AppService],
})
export class AppModule {}
