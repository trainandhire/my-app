import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailsService {

  constructor(private httpClient: HttpClient) { }

  getMails():Observable<any>{
    return this.httpClient.get("https://jsonplaceholder.typicode.com/todos");
  }

}
