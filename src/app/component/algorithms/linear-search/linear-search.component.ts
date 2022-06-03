import { Component, OnInit } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
  selector: 'app-linear-search',
  templateUrl: './linear-search.component.html',
  styleUrls: ['./linear-search.component.css']
})
export class LinearSearchComponent implements OnInit {

  activeIndex: any;
  searchActive: boolean | undefined = false;
  abort: boolean | undefined = false;
  inputValue: any;
  searchValue:any;
  note = "";
  inputStack: number[] = []
  lineNo=0
  timer =1



  constructor() {

    this.activeIndex = undefined;
    this.inputStack = [2, 43, 556, 23, 564, 34, 64, 9445]
  }

  ngOnInit(): void {
  }

  pushItem() {
    if (this.inputValue === undefined || this.inputValue === null) {
      this.note = "Please enter a value to insert!"
      return;
    }

    this.activeIndex = undefined;
    if (this.inputStack.length == 50) {
      this.note = "Cannot push more than 50 items !";
      return;
    }
    this.inputStack.push(this.inputValue);
    this.note = this.inputValue + " added to array";
    this.inputValue =null
  }

  popItem() {
    
    this.activeIndex = undefined;
    if (this.inputStack.length == 0) {
      this.note = "Array is empty !";
      return;
    }

    this.note = this.inputStack[this.inputStack.length - 1] + " removed from array";
    this.inputStack.pop();
  }

async lineDelay(lineNo:any){
  this.lineNo =lineNo
  await this.delay(this.timer*10)
}

async isAborted(){
  if(this.abort){
    this.abort = false;
    this.searchValue =null;
    this.activeIndex = undefined;
    this.note = "Search Aborted!";
    await this.delay(1000);
    this.searchActive=false
    return true;
  }
  return false;
}



  async linearSearch() {

    
    if (this.searchValue === undefined || this.searchValue === null) {
      this.note = "Please enter a value to search !"
      return;
    }

    var temp = this.searchValue 

    this.activeIndex = undefined;
    var len = this.inputStack.length;
    if (len == 0) {
      this.note = "Please Insert items to search";
      return;
    }


    this.searchActive = true;
    this.note = "Searching  for "+this.searchValue+" ...."
    for (var i = 0; i < len; i++) {
     

      // if(this.abort){
      //   this.abort = false;
      //   this.searchValue =null;
      //   this.activeIndex = undefined;
      //   this.note = "Search Aborted!";
      //   await this.delay(1000);
      //   this.searchActive=false
      //   return;
      // }
     
      if(await this.isAborted()){
        return;
      }


      this.activeIndex = i;
      if(i>0){
        await this.lineDelay(4)}
     
      await this.lineDelay(1)
      
      await this.delay(this.timer *10);

      await this.lineDelay(2)

      if (this.inputStack[i] == this.searchValue) {
        await this.lineDelay(3)
        this.note = temp + " found at index " + i;
        this.searchValue =null;
        this.searchActive = false;
        
        return;
      }
      

    }

    await this.lineDelay(5)
    this.searchActive = false;
    this.activeIndex = undefined;
    this.note = temp + " not found in array!";
    this.searchValue =null;
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


}
