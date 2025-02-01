import { Component } from '@angular/core';
import { DashboarServiceService } from '../dashboard/dashboar-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  constructor(private _service:DashboarServiceService){
    this.getAllBlog();
    
  }
  blog_list:any
  getAllBlog(){
    this._service.getBlog().subscribe((data)=>{
      this.blog_list = data
      this.blog_list = this.blog_list.data
      console.log(this.blog_list)
    })
  }



}
