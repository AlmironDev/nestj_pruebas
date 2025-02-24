import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto,  UpdateTaskDto } from './dto/taks.dto';
import { ValidationTypes } from 'class-validator';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiResponse({status:200, description:'All tasks'})
  getAllTasks() {
    console.log('queryentramos');
    return this.tasksService.getTasks();
  }
  @Get('/:id')
  getTask(@Param('id') id: string) {

    return this.tasksService.getTask(id);
  }

  @Post()
  @ApiOperation({summary:'Create a task'})
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
