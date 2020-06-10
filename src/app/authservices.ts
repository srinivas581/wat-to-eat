import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';




@Injectable({
    providedIn:'root'
})

export class Authservices {
  emailForm(arg0: any): any {
    throw new Error("Method not implemented.");
  }
    constructor(private http:HttpClient) { }


    signup(data){
        return this.http.post(environment.url +"/eat/userRegister",data) 
    }


    login(data){
        return this.http.post(environment.url + "/eat/login",data)
    }

    submit(data){
        return this.http.post(environment.url + "",data)
    }
}
