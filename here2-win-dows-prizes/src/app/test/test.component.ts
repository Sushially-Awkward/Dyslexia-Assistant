import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from "angularfire2/database"; 
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class Item {
  body: string;
}

export class TestComponent implements OnInit {

  items: AngularFireList<Item[]> = null;
  //items;
  userId: string;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
  }


  // Return an observable list with optional query
  // You will usually call this from OnInit in a component
  getItemsList(): AngularFireList<Item[]> {
    if (!this.userId) return;
    this.items = this.db.list(`items/${this.userId}`);
    return this.items
  }


  createItem(item: Item[])  {
    this.items.push(item);
  }

  ngOnInit(){

  }

}
