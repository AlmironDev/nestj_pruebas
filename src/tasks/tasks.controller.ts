import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto,  UpdateTaskDto } from './dto/taks.dto';
import { ValidationTypes } from 'class-validator';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAllTasks(@Query() query: object) {
    console.log('query', query);
    return this.tasksService.getTasks();
  }
  @Get('/:id')
  getTask(@Param('id') id: number) {
    console.log('id', id);
    return this.tasksService.getTask(id);
  }

  @Post()
  createTasks(@Body() task: CreateTaskDto) {
    console.log('task0', task);
    return this.tasksService.createTasks(task);
  }
  @Put()
  updateTasks(@Body() task: UpdateTaskDto) {
    return this.tasksService.updateTasks(task);
  }
  @Delete()
  deleteTasks() {
    return this.tasksService.deleteTasks();
  }
  @Patch()
  updateTasksstatus() {
    return this.tasksService.updateTasksstatus();
  }
}
