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
  bnrsound;
  fnlsound;
  constructor(
    public db: AngularFirestore,
    public firebaseAuth: AngularFireAuth
  ) {
    this.items = db.collection('items').valueChanges();
    this.bnrsound=this.readTextFile("assets/test/oral/bnrsound.txt").split("\n");
    this.fnlsound=this.readTextFile("assets/test/oral/fnlsound.txt").split("\n");
    console.log(this.bnrsound);
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
  readTextFile(file)
  { let allText;
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
            }
        }
    }
    
    rawFile.send(null);
    return allText;
  }
  ngOnInit(){

  }

}
  