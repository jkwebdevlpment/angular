import { Component, OnInit, Output} from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-contac-form',
  templateUrl: './contac-form.component.html',
  styleUrls: ['./contac-form.component.css']
})
export class ContacFormComponent implements OnInit {
  @Output() likeToggle = new EventEmitter();
 movie = {
   name : "jk",
   likes : true
 }
//   switch($event){
//    this.movie.likes = false;
//  }

heattss($event){
  this.movie.likes = !this.movie.likes;

}

  constructor() {
   
   }

  ngOnInit() {
  }

}
