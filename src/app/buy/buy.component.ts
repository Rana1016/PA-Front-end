import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import {NzCascaderOption } from 'ng-zorro-antd/cascader';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {
  constructor(private _service:AuthServiceService){}
  cityList=this._service.city_list

  options: NzCascaderOption[] = [
    {
      value: 'home',
      label: 'Home',
      children: [
        {
          value: 'house',
          label: 'House',
          isLeaf: true
        },
        {
          value: 'flat',
          label: 'Flat',
          isLeaf: true
        },
        {
          value: 'upper_portion',
          label: 'Upper Portion',
          isLeaf: true
        },
        {
          value: 'lower-portion',
          label: 'Lower Portion',
          isLeaf: true
        },
        {
          value: 'farm-house',
          label: 'Farm House',
          isLeaf: true
        },
        {
          value: 'room',
          label: 'Room',
          isLeaf: true
        },
        {
          value: 'penthouse',
          label: 'Penthouse',
          isLeaf: true
        },
      ]
    },
    {
      value: 'plots',
      label: 'Plots',
      children: [
        {
          value: 'residential-plot',
          label: 'Residential Plot',
          isLeaf: true
        },
        {
          value: 'commercial-plot',
          label: 'Commercial Plot',
          isLeaf: true
        },
        {
          value: 'agriland',
          label: 'Agriculture Land',
          isLeaf: true
        },
        {
          value: 'indusland',
          label: 'industrial Land',
          isLeaf: true
        },
        {
          value: 'plot-file',
          label: 'Plot File',
          isLeaf: true
        },
        {
          value: 'plot-form',
          label: 'Plot Form',
          isLeaf: true
        }
      ]
    },
    {
      value: 'commercial',
      label: 'Commercial',
      children: [
        {
          value: 'shop',
          label: 'Shop',
          isLeaf: true
        },
        {
          value: 'office',
          label: 'Office',
          isLeaf: true
        },
        {
          value: 'warehouse',
          label: 'Warehouse',
          isLeaf: true
        },
        {
          value: 'factory',
          label: 'Factory',
          isLeaf: true
        },
        {
          value: 'building',
          label: 'Building',
          isLeaf: true
        },
        {
          value: 'other',
          label: 'other',
          isLeaf: true
        },
      ]
    }
  ];

  nzOptions: NzCascaderOption[] = this.options;
  values: string[] | null = null;

  typeChanges(values: string[]): void {
    console.log(values, this.values);
  }
    
}
