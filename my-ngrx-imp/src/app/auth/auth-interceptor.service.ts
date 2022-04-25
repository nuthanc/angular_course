import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import * as fromApp from '../store/app.reducer';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private store: Store<fromApp.AppState>) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = null;
    this.store
      .select('auth')
      .pipe(take(1))
      .subscribe((authState) => token = authState.user?.token);
    if (token) {
      const tokenizedReq = req.clone({
        params: new HttpParams().set('auth', token),
      });
      return next.handle(tokenizedReq);
    }
    return next.handle(req);
  }
}
