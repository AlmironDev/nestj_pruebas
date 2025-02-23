import { IsBoolean, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @MinLength(2)
  title: string;
  @IsString()
  @MinLength(2)
  description: string;
  @IsBoolean()
  status: Boolean;
}

export class UpdateTaskDto {

  title?: string;
  description?: string;
  status?: Boolean;
}
