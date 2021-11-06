import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {City} from "../../models/city";

@Component({
  selector: 'app-dynamic-select',
  templateUrl: './dynamic-select.component.html',
  styleUrls: ['./dynamic-select.component.css']
})
export class DynamicSelectComponent implements OnInit {

  form: FormGroup;
  items: any[] = [];
  url = 'url';

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      items: ['']
    });

    this.http.get(this.url).toPromise().then(res => this.items = res as City[])

  }

  submit() {
    console.log(this.form.value);
  }


  ngOnInit(): void {
  }

}
