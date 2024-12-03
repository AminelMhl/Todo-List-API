import { Injectable } from '@nestjs/common';
import { CreateTasksDto as task } from './dto/create-tasks.dto';
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class TasksService {
    private tasks: task[] = [];
    private taskCount: number = 0;

    showTasks(){
        if(this.taskCount==0){
            return("you have no tasks")
        }
        return this.tasks;
    }

    addTask(tsk: string): string {
        for (let i = 0; i < this.taskCount; i++) {
            if (this.tasks[i].name == tsk) {
                return("task already exists");
            }
        }
        const newTask = new task(tsk); 
        this.tasks.push(newTask);
        this.taskCount++; 
        return 'Task added successfully';
    }

    updateTask(tsk: string, id: string): string {
        for (let i = 0; i < this.taskCount; i++) {
            if (this.tasks[i].name == tsk || this.tasks[i].id == id) {
                if(this.tasks[i].satus == 'pending'){
                    this.tasks[i].satus="done";
                    return("task done!");
                }
                else{
                    this.tasks[i].satus="pending";
                    return("you undid the task");
                }
            }
        }
        return ("task doesn't exist")
        
    }

    deleteTask(tsk: string, id: string): string{
        for (let i = 0; i < this.taskCount; i++) {
            if (this.tasks[i].name == tsk || this.tasks[i].id == id) {
                this.tasks.splice(i,1);
                this.taskCount--;
                return("task deleted")
            }
        }
        return ("task doesn't exist")
    }

    deleteAll(): string{
        if(this.taskCount==0){
            return ("no tasks to delete")
        }
        this.tasks = [];
        this.taskCount = 0;
        return("all tasks deleted")
    }
}
