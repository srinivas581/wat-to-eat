import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";

import { Observable,throwError,BehaviorSubject} from "rxjs";
import { catchError, finalize, map } from 'rxjs/operators';
import { Router } from '@angular/router';




@Injectable()
export class HTTPStatus {
  private requestInFlight$: BehaviorSubject<boolean>;
  constructor() {
    this.requestInFlight$ = new BehaviorSubject(false);
  }
  setHttpStatus(inFlight: boolean) {
   
    this.requestInFlight$.next(inFlight);
  }

  getHttpStatus(): Observable<boolean> {
    return this.requestInFlight$.asObservable();
  }
}


@Injectable()
export class HTTPListener implements HttpInterceptor {
  constructor(private status: HTTPStatus, private router : Router,  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map(event => {
        return event;
      }),
      catchError(error => {
        console.log(error,'error1234',)
        if(error.statusText=='Unauthorized'){
          console.log('expired')
          localStorage.clear();
          this.router.navigate(['/auth']);
        
         
        }
        return throwError(error);
      }),
      finalize(() => {
        this.status.setHttpStatus(false);
      })
    )
  }
}


@Injectable()
export class InterceptorService implements HttpInterceptor {
 
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
    if (localStorage.getItem('token')) {
      var headers = {};
      // console.log(localStorage.getItem('token'));
      request = request.clone({
        setHeaders: {
          'x-access-token':localStorage.getItem('token') ,
          Authorization: localStorage.getItem('token')
        }
      })
      return next.handle(request);
    }
    else {
      // console.log('interceptor.........')
      return next.handle(request);
    }

  }
}
