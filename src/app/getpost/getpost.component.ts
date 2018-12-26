import { Component, OnInit } from '@angular/core';
import { GetService } from '../service/get.service'

@Component({
  selector: 'app-getpost',
  templateUrl: './getpost.component.html',
  styleUrls: ['./getpost.component.css'],
  providers: [GetService]

})
export class GetpostComponent implements OnInit {
    posts : any ;
  constructor(private GetService: GetService) { }
  
  ngOnInit() {
   this.GetService.getData().subscribe(
     data => {
       console.log(data)
       this.posts = data;
     }
   )
    
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


  

}
