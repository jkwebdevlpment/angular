import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { CmspageService } from '../cmspage.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  providers: [CmspageService]
})
export class PageComponent implements OnInit {
  field = "jktechnical";
  setcolor = "red";
  ganer = "all";

  heros ;
  @Input() likes;
  @Output()likeToggle = new EventEmitter();

  likeChange($event){
    $event.stopPropagation();
    this.likeToggle.emit($event);

  }
 

  constructor(private cmspageService: CmspageService) {
     this.heros = this.cmspageService.getData();
   }
 
  ngOnInit() {
  }
  // test1($event){
  //   $event.stopPropagation();
  //   alert("First alert")

  // }
  // test2($event) {
 
  //   alert("second alert")

  // }
  feeddata = {
    firstName : 'jitendra',
    email : 'jitendrasonyani@gmail.com',
    feed : 'Some text about you',
    type : 'free',
    plateform : 'web'

  }

  usertype = ['free', 'premium'];

  plateforms = ['web','android'  , 'ios']

  onSubmit(f){
    console.log(f);
    
  }

  



}
