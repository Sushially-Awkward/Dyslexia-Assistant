import { Component, OnInit } from '@angular/core';
import {ReadfileService} from './../../readfile.service';
import { TestComponent } from './../test.component';
import { Route } from '@angular/compiler/src/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-over',
  templateUrl: './over.component.html',
  styleUrls: ['./over.component.css']
})
export class OverComponent implements OnInit {
  total;
  constructor(
    private router:Router,
    private tc:TestComponent
  ) { 
    this.total=tc.totalscore;
    this.tc.finalresults();
  }
  goHome(){
    this.router.navigate(['']);
  }
  ngOnInit() {
  }

}
