import { Component, OnInit } from '@angular/core';
import {ReadfileService} from './../../readfile.service';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css']
})
export class ReadingComponent implements OnInit {

  constructor(
    private rf:ReadfileService
  ) { }

  ngOnInit() {
  }

}
