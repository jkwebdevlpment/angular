import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

   getData(){
    return this.http.get(this.url);
   }
  makePost(newpost){
   return this.http.post(this.url, newpost)
   }

   //Update Post

   updatePost(postId){
     let seen = {
       seen:true
     }
     let targetPost = this.url + '/'+postId;
     return this.http.patch( targetPost, seen )

   }

   //Delete POst
  deletePost(postId){
    return this.http.delete(this.url + '/' + postId)
  }
   
}
