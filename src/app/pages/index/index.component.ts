import { Component, OnInit } from '@angular/core';
import {CityService} from "../../core/services/city.service";
import {City} from "../../core/models/city";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
/*
Example of GET operation
after testing for removal
 */
  private eventsPath = "cities";
  cityCount: string | undefined;
  city: City[] = [];
  cityId: any;
  public id: string = '1';

  constructor(private cityservice: CityService, private http: HttpClient) {
  }

  ngOnInit(): void {
    //it returns arrays so when calling it in html we use {{city[index].key | json}}
    this.cityservice.getEventCity().then(res => this.city = res as City[]);
    //it only returns a string so when calling it in html we use {{cityservice | json}}
    this.cityservice.getCountEventCity().then(res2 => this.cityCount = res2 as string);
    //it returns simple json so when calling it in html we use {{cityId.key | json}}
    this.cityservice.getIdEventCity('1').then(data => {this.cityId = data as City[];});

  }
}
