import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const guard_validate = context.switchToHttp().getRequest() as Request

    console.log("request url ",guard_validate.url)

    if (guard_validate.url === '/name_user') return false;

    return true;
  }

}
