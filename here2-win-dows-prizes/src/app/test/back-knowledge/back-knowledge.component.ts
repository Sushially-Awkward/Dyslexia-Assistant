import { Component, OnInit } from '@angular/core';
import {ReadfileService} from './../../readfile.service';
import { TestComponent } from './../test.component';

@Component({
  selector: 'app-back-knowledge',
  templateUrl: './back-knowledge.component.html',
  styleUrls: ['./back-knowledge.component.css']
})
export class BackKnowledgeComponent implements OnInit {
  score;
  x;
  words;
  answer;
  questions;
  constructor(
    private rf:ReadfileService,
    private tc:TestComponent
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
