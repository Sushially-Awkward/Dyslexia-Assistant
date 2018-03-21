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
  user:string;
  notests;

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
    this.notests=0;
    this.items = db.collection('test').valueChanges();
    this.user="";
    for(let item of this.items){
      this.notests=Math.max(this.notests,item.testno);
      console.log(item.testno);
    }
    console.log(this.notests);
   
    firebaseAuth.authState.subscribe(
      (auth) => {
        if (auth != null) {
          this.user=auth.uid;
          console.log(auth.uid);
        }
      }); 
  }
  addTodo() {
      let added=new Object;
      console.log(this.user);
      added={ 
        uid:this.user,
        testno:this.notests+1,
        bknow:this.bkscore,
        spelling:this.spellingscore,
        writing:this.writingscore,
        total: this.totalscore
      };
      this.db.collection('test').add(added);
  }

  finalresults(){
    this.addTodo();
  }
  taketest(){
    this.start=true;
    this.spellingstatus=true;
  }
  ngOnInit(){

  }

}