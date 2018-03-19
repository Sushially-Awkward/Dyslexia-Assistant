import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})


export class TestComponent implements OnInit {

  items;
  user;
  constructor(
    public db: AngularFirestore,
    public firebaseAuth: AngularFireAuth
  ) {
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
  ngOnInit(){

  }

}
