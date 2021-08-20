import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    getData(){
        return this.http.get('https://localhost:5001/json/reply/Hello');
    }   

    postEmail(mail:string | undefined){
        const body = {email:mail};
        return this.http.post('https://localhost:5001/json/reply/Hello', body, {responseType:'text'});
    }
}