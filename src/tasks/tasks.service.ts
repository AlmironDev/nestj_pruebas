import { Injectable } from '@nestjs/common';
import {  CreateTaskDto, UpdateTaskDto } from './dto/taks.dto';

export interface User {
  id: string;
}

export interface Task {
  id: number;
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    console.log('task', this.tasks);
    console.log('id_service', id);
    console.log('Tipo de id_service:', typeof id, id);

    return this.tasks.find((task) => task.id === id);
  }

  createTasks(task: CreateTaskDto) {
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
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
