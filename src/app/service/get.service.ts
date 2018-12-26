import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class GetService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) { }
  getData(){
   return this.http.get(this.url)
  }

  


  // makePost(newpost) {
  //   return this.http.post(this.url, newpost)
  // }

  
}
