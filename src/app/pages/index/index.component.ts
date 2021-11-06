import { Component, OnInit } from '@angular/core';
import {CityService} from "../../core/services/city.service";
import {Observable} from "rxjs";
import {City} from "../../core/models/city";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  cityCount: City[] | undefined;
  public citiess: City[] | undefined;

  constructor() {
    this.cityCount = CityService.arguments.getCountEventCity();
  }

  ngOnInit(): void {
  }
}
