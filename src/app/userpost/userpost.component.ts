import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { GetService } from '../service/get.service';

@Component({
  selector: 'app-userpost',
  templateUrl: './userpost.component.html',
  styleUrls: ['./userpost.component.css'],
  providers: [PostService, GetService]
 
})
export class UserpostComponent implements OnInit {
  posts:any;
  constructor(private Postservice: PostService, private GetService: GetService) { }

  ngOnInit() {

      this.GetService.getData().subscribe(
        data => {
         console.log(data)
         this.posts = data;
        }
      )



    // this.Postservice.getData().subscribe(
    //   response => {
    //     console.log(response)
    //     this.posts = response;
    //   }
    // )
  }
  // createPost(ptitle:HTMLInputElement , pbody: HTMLTextAreaElement){
  //    let newpost = {
  //      title: ptitle.value,
  //      body: pbody.value
  //    }
  //    ptitle.value = '';
  //    pbody.value = '';
  //   this.Postservice.makePost(newpost)
  //   .subscribe(response =>{
  //     console.log(response)
  //     this.posts.splice(0 , 0 ,newpost)
  //   })
  // }

  // // Update Post
  // editPost(post){
  //   this.Postservice.updatePost(post.id)
  //   .subscribe(response =>{
  //     console.log(response)
  //   })
  // }

  // //Delete post 
  // trashPost(post){
  //   this.Postservice.deletePost(post.id)
  //   .subscribe(data => {
  //    console.log(data)
  //   let postI = this.posts.indexOf(post)
  //     this.posts.splice(postI,1)

  //  })
    
  // }

}
