import { Component, OnInit } from '@angular/core';
import { NavigationModel } from './models/navigation.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'AlVis';
  motto = 'Algorithm Visualized'
  imageSource = "../assets/neural.png";
  topBarItems:NavigationModel[] =[];


  constructor(){

this.populateTopbarItems();


  }

  


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  populateTopbarItems(){
   this.topBarItems.push({id:1,name:"About", link:"about"});
   this.topBarItems.push({id:2,name:"Donate", link:"donate"});
   this.topBarItems.push({id:3,name:"Contact", link:"contact"});
   this.topBarItems.push({id:4,name:"Join", link:"join"});


  }

 


}
