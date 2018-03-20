import { Component, OnInit } from '@angular/core';
import {ReadfileService} from './../../readfile.service';
@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.css']
})
export class WritingComponent implements OnInit {

  constructor(
    private rf:ReadfileService
  ) { }

  ngOnInit() {
  }

}
