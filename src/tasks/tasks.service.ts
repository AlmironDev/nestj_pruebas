import { Injectable } from '@nestjs/common';
import {  CreateTaskDto, UpdateTaskDto } from './dto/taks.dto';
import { PrismaService } from 'src/prisma.service';

export interface Task {
  id: number;
}

@Injectable()
export class TasksService {
  constructor(private prisma:PrismaService) {}

  getTasks() {
    return this.prisma.tasks.findMany();
  }

  getTask(id: string) {

    return this.prisma.tasks.findUnique({ where: { id } });
  }

  createTasks(task: any) {
  
    return this.prisma.tasks.create({ data: task });
  }

  updateTasks(task: UpdateTaskDto) {
    return 'All tasks';
  }

  deleteTasks() {
    return 'All tasks';
  }

  updateTasksstatus() {
    return 'All tasks';
  }
}
