import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import {ReadfileService} from './../readfile.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})


export class TestComponent implements OnInit {
  totaltests;
  testnumber;

  totalscore;
  writingscore;
  bkscore;
  spellingscore;

  items;
  user;
  bnrsound;
  fnlsound;

  testover;
  writingstatus;
  spellingstatus;
  bkstatus;
  start;

  question;
  constructor(
    public db: AngularFirestore,
    public firebaseAuth: AngularFireAuth
  ) {
    this.testover=false;
    this.writingstatus=false;
    this.spellingstatus=false;
    this.bkstatus=false;
    this.totalscore=0;
    this.writingscore=0;
    this.spellingscore=0;
    this.bkscore=0;
    this.start=false;

    this.items = db.collection('items').valueChanges();
    firebaseAuth.authState.subscribe(
      (auth) => {
        if (auth != null) {
          this.user=auth.uid;
          console.log(auth.uid);
        }
      }); 
  }
  addTodo(todoDesc: string) {
    if (todoDesc && todoDesc.trim().length) {
      this.db.collection('items').add({ description: todoDesc, completed: false });
    }
  }

  finalresults(){
    
  }
  taketest(){
    this.start=true;
    this.spellingstatus=true;
  }
  ngOnInit(){

  }

}