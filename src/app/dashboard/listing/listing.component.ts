import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  isIntallAvail= false;
  addOtherVideo = false;
  base64textString: any = [];
  constructor(private _service:AuthServiceService, private _fb:FormBuilder){}
  cityList= this._service.city_list;
  installAvail(){
    this.isIntallAvail = !this.isIntallAvail;
  }
  addVideo(){
    this.addOtherVideo = true;
  }

  listingForm = this._fb.group({
    poster_id:[''],
    purpose:[''],
    property_type:[''],
    city:[''],
    location:[''],
    area_size:[''],
    area_unit:[''],
    price:[''],
    installment_status:[''],
    advance:[''],
    no_of_installments:[''],
    installment_amount:[''],
    possession_status:[''],
    no_of_bedroom:[''],
    no_of_bath:[''],
    ad_title:[''],
    ad_description:[''],
    property_img:[''],
    property_vid1:[''],
    property_vid2:[''],
    email:[''],
    phone:[''],
    landline:['']
  })
  onUploadChange(evt: any) {
    const file = evt.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);

    }
  }
  
  handleReaderLoaded(e:any) {
    this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
    console.log("conversion",this.base64textString)
  }



  postListing(){
    if(this.listingForm.valid){
      this.listingForm.patchValue({property_img:this.base64textString ||''})
      console.log(this.listingForm)
    }else{
      alert('form not valid')
    }
  }





}
