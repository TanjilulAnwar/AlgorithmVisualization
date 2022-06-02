import { Component, OnInit } from '@angular/core';
import { NavigationModel } from 'src/app/models/navigation.model';
import { AppSettingsService } from 'src/app/services/app-settings.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerItems: NavigationModel[] = [];

  constructor(private appSettingsService: AppSettingsService) { 
    
    this.populateFooterItems();
  }

  ngOnInit(): void {
  }

  populateFooterItems() {
    this.appSettingsService.getJSON().subscribe(data => {
  
      this.footerItems = data.footerList

    });

  }

}
