import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private _service:AuthServiceService, private _fb:FormBuilder){}
  isAgent:boolean=false;
  personType(){
    this.isAgent = true
    console.log(this.isAgent)
  }
  cityList=this._service.city_list;
  queryForm= this._fb.group({
    name:[],
    phone:[''],
    email:[''],
    location:[''],
    subject:[''],
    message:[''],
    role:[''],
    role_type:['']
  })
  sendQuery(){
    console.log(this.queryForm.value)
  }
}
