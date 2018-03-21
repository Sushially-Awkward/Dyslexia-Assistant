import { Component, OnInit } from '@angular/core';
import {ReadfileService} from './../../readfile.service';
import { TestComponent } from './../test.component';

@Component({
  selector: 'app-spelling',
  templateUrl: './spelling.component.html',
  styleUrls: ['./spelling.component.css']
})
export class SpellingComponent implements OnInit {
  score;
  x;
  words;
  answer;
  questions;
  constructor(
    private rf:ReadfileService
  ) { 
    this.x=0;
    this.words=rf.readTextFile("assets/test/spelling").split("\n");
    this.questions= new Array();
    this.questions[0]=this.words[Math.floor((Math.random() * 296))];
    this.questions[1]=this.words[Math.floor((Math.random() * 296))];
    this.questions[2]=this.words[Math.floor((Math.random() * 296))];
    this.questions[3]=this.words[Math.floor((Math.random() * 296))];
    this.questions[4]=this.words[Math.floor((Math.random() * 296))];
    console.log(this.questions);
  }
  speak(ms){
    let msg = new SpeechSynthesisUtterance(ms);
    window.speechSynthesis.speak(msg);
  }
  submit(){
    this.x++;
  }
  ngOnInit() {
  }

}
