import { Component, OnInit } from '@angular/core';
import {ReadfileService} from './../../readfile.service';

@Component({
  selector: 'app-oral',
  templateUrl: './oral.component.html',
  styleUrls: ['./oral.component.css']
})
export class OralComponent implements OnInit {
  score;//total 
  
  bnrsound;
  fnlsound;
  constructor(
    private rf:ReadfileService
  ) { 

    this.bnrsound=rf.readTextFile("assets/test/oral/bnrsound.txt").split("\n");
    this.fnlsound=rf.readTextFile("assets/test/oral/fnlsounds.txt").split("\n");
  }

  ngOnInit() {
  }

}
