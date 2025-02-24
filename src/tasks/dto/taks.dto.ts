import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ description: 'Título de la tarea', example: 'Comprar pan' })
  @IsString()
  @MinLength(2)
  title: string;
  @ApiProperty({
    description: 'Descripción de la tarea',
    example: 'Ir a la panadería a las 8 AM',
  })
  @IsString()
  @MinLength(2)
  description: string;
}

export class UpdateTaskDto {
  title?: string;
  description?: string;
  status?: Boolean;
}
