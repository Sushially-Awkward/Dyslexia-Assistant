import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css']
})
export class PractiseComponent implements OnInit {
  practise;
  constructor() { 
    this.readTextFile("assets/practisetext");
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