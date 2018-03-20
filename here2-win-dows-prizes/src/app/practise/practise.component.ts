import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css']
})
export class PractiseComponent implements OnInit {
  practise;
  user;
  constructor(
    public firebaseAuth: AngularFireAuth
  ) { 
    this.readTextFile("assets/practisetext");
    firebaseAuth.authState.subscribe(
      (auth) => {
        if (auth != null) {
          this.user=auth.uid;
          console.log(auth.uid);
        }
      }); 
  }

  ngOnInit() { }

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
    this.practise=allText;
    console.log(this.practise);
  }
  
  

}