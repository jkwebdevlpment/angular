import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
import { Blogpost } from '../blogpost';

@Component({
  selector: 'app-blogpost-featured',
  templateUrl: './blogpost-featured.component.html',
  styleUrls: ['./blogpost-featured.component.css']
})
export class BlogpostFeaturedComponent implements OnInit {
  siteUrl = "http://www.thoughtwin.com"
  heading = "Blog Post";
  setpro  = false ;
  blogs: Blogpost;
  error: {};

  constructor(private blogpostService: BlogpostService) { }

  ngOnInit() {
    
  }

}
