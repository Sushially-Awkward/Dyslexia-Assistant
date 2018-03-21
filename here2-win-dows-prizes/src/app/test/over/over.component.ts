import { Component, OnInit } from '@angular/core';
import {ReadfileService} from './../../readfile.service';
import { TestComponent } from './../test.component';

@Component({
  selector: 'app-over',
  templateUrl: './over.component.html',
  styleUrls: ['./over.component.css']
})
export class OverComponent implements OnInit {
  total;
  constructor(
    private tc:TestComponent
  ) { 
    this.total=tc.totalscore;
    this.tc.finalresults();
  }

  ngOnInit() {
  }

}
