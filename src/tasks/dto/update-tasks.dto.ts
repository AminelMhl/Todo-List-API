import { PartialType } from '@nestjs/mapped-types';
import { CreateTasksDto } from './create-tasks.dto';

export class UpdateTaskDto extends PartialType(CreateTasksDto) {}
