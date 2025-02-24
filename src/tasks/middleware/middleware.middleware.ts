import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';


@Injectable()
export class MiddlewareMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log("req.originalURl",req.originalUrl)
    console.log('req.body:', req.body);
    
    next();
  }
}
