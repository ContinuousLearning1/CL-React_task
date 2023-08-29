import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Users } from './DataClass';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient){}
  private url="https://jsonplaceholder.typicode.com/users";
  getData(): Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }
 
  private url1="http://localhost:8080/getlist";
  getDetails():Observable<any[]>{
    return this.http.get<any[]>(this.url1);
  }
  private url3="http://localhost:8080/excel";
  getexceldata():Observable<any[]>{
    return this.http.get<any[]>(this.url3);
  }

  private url2="http://localhost:8080/addusers";

  isSuccess: boolean = false;
  isError: boolean = false;

  create(data:Users){
    return this.http.post(this.url2,data,{responseType:'text' as 'json'})

  }
  
}
