import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboarServiceService {
  BASE_URL='http://localhost:3000';

  constructor(private _http:HttpClient) { }

  postBlog( data:any){
    let blog_url = this.BASE_URL + "/blog"
    return this._http.post(blog_url,data)
  }
  getBlog(){
    let blog_url = this.BASE_URL + "/blog"
    return this._http.get(blog_url)
  }

  postListing(data:any){
    let listing_url = this.BASE_URL + "/listing"
    return this._http.post(listing_url,data)
  }

  getListing(){
    let listing_url = this.BASE_URL + "/listing"
    return this._http.get(listing_url)
  }






}
