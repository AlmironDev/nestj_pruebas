import { Controller, Get,HttpCode,Param,ParseIntPipe,Post,Query,Req, Res, UseGuards } from '@nestjs/common';
import { query, Request, Response } from 'express';
import { ValidatequeryPipe } from './pipes/validatequery/validatequery.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller({})
export class MainController {

    @Get('/')
    index(@Req() request:Request, @Res() response:Response) {
        response.status(200).send('Hello asdWorld');
    }

    @Get('error')
    @HttpCode(400)
    errorpage(){
        return "Error con stados 200"
    }
    @Get('ticket/:num')
    @UseGuards(AuthGuard)
    getNumber(@Param('num',ParseIntPipe) num:number){
        return num + 1000
    }

    @Get('name_user')
    @UseGuards(AuthGuard)
    getQueryParams(@Query(ValidatequeryPipe) query:{name:string ,age:number} ){
        console.log(typeof query.name)
        console.log(typeof query.age)
        return ` my name is ${query.name} and have ${query.age} años`
    }


}
