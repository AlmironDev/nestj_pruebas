import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class Mid2Middleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const {authorization} = req.headers

    if(!authorization){
      throw new HttpException('No autorizado',HttpStatus.UNAUTHORIZED)
    }

    if(authorization !== '123'){
      throw new HttpException('Credenciales invalidas',HttpStatus.FORBIDDEN)
    }
    
    next();
  }
}
