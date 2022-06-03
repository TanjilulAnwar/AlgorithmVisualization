import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linear-search',
  templateUrl: './linear-search.component.html',
  styleUrls: ['./linear-search.component.css']
})
export class LinearSearchComponent implements OnInit {

  activeIndex: any;
  searchActive: boolean | undefined = false;
  inputValue: any;
  searchValue:any;
  note = "";
  inputStack: number[] = []

///slider///////////////
autoTicks = false;
disabled = false;
invert = false;
max = 100;
min = 0;
showTicks = false;
step = 1;
thumbLabel = false;
timer = 0;
multiple = 10;
vertical = false;
tickInterval = 1;

getSliderTickInterval(): number | 'auto' {
  if (this.showTicks) {
    return this.autoTicks ? 'auto' : this.tickInterval;
  }

  return 0;
}
///slider///////////////










  
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

  async linearSearch() {

    if (this.searchValue === undefined || this.searchValue === null) {
      this.note = "Please enter a value to search !"
      return;
    }

    this.activeIndex = undefined;
    var len = this.inputStack.length;
    if (len == 0) {
      this.note = "Please Insert items to search";
      return;
    }


    //this.searchActive = true;
    this.note = "Searching  for "+this.searchValue+" ...."
    for (var i = 0; i < len; i++) {
      this.activeIndex = i;
      await this.delay(this.timer *10);
      if (this.inputStack[i] == this.searchValue) {
        this.note = this.searchValue + " found at index " + i;
        this.searchValue =null;
        // this.searchActive = false;
        return;
      }

    }

    //this.searchActive = false;
    this.activeIndex = undefined;
    this.note = this.searchValue + " not found in array!";
    this.searchValue =null;
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


}
