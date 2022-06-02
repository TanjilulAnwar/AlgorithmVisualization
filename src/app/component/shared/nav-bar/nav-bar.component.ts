import { Component, OnInit } from '@angular/core';
import { NavigationModel } from 'src/app/models/navigation.model';
import { AppSettingsService } from 'src/app/services/app-settings.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers:[AppSettingsService]
})
export class NavBarComponent implements OnInit {

 
  title: string | undefined;
  motto: string | undefined;
  imageSource: string | undefined;
  topBarItems: NavigationModel[] = [];

  constructor(
    private appSettingsService: AppSettingsService
  ) {

    this.populateTopbarItems();
  }

  ngOnInit(): void {

  }


  populateTopbarItems() {
    this.appSettingsService.getJSON().subscribe(data => {
      this.title = data.title;
      this.motto = data.motto;
      this.imageSource = data.imageSource;
      // console.log(data.topbarList);
      this.topBarItems = data.topbarList

    });
    // this.topBarItems.push({id:1,name:"About", link:"about"});
    // this.topBarItems.push({id:2,name:"Donate", link:"donate"});
    // this.topBarItems.push({id:3,name:"Contact", link:"contact"});
    // this.topBarItems.push({id:4,name:"Join", link:"join"});


  }
}
