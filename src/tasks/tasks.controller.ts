import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTasksDto as task } from './dto/create-tasks.dto';

@Controller('/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  showTasks(){
    return this.tasksService.showTasks();
  }

  @Post()
  addTask(@Body('name') name: string, task: task): string {
    return this.tasksService.addTask(name);
  }

  @Put()
  updateTask(@Body('name') name: string, @Body('id') id: string): string {
    return this.tasksService.updateTask(name, id)
  }

  @Delete()
  deleteTask(@Body('name') name: string, @Body('id') id: string): string{
    return this.tasksService.deleteTask(name, id)
  }

  @Delete("/all")
  deleteAll(): string{
    return this.tasksService.deleteAll()
  }

}
