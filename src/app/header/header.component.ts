import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  routeData:any;
  constructor(private _route:ActivatedRoute, private _service:AuthServiceService){  }
  ngOnInIt(){
    this.routeData = this._route.data.subscribe((data)=>{
      console.log(data)
    })
  }
  agent(){
    this._service.isAgent.next(true)
  }
  nonAgent(){
    this._service.isAgent.next(false)
  }


}
