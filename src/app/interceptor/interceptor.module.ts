import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient,HTTP_INTERCEPTORS} from '@angular/common/http';
import { InterceptorService, HTTPListener, HTTPStatus } from './interceptor.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },{
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPListener,
      multi: true
    },
  HTTPStatus]

})
export class InterceptorModule { }