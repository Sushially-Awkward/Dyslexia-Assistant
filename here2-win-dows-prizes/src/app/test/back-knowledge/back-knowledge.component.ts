import { Component, OnInit } from '@angular/core';
import {ReadfileService} from './../../readfile.service';
import { TestComponent } from './../test.component';

@Component({
  selector: 'app-back-knowledge',
  templateUrl: './back-knowledge.component.html',
  styleUrls: ['./back-knowledge.component.css']
})
export class BackKnowledgeComponent implements OnInit {

  constructor(
    private rf:ReadfileService
  ) { }
  
  ngOnInit() {
  }

}
