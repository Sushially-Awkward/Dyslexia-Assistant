import { Component, OnInit } from '@angular/core';
import {ReadfileService} from './../../readfile.service';

@Component({
  selector: 'app-spelling',
  templateUrl: './spelling.component.html',
  styleUrls: ['./spelling.component.css']
})
export class SpellingComponent implements OnInit {

  constructor(
    private rf:ReadfileService
  ) { 
    
  }

  ngOnInit() {
  }

}
