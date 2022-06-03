import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutedComponents, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavBarComponent } from './component/shared/nav-bar/nav-bar.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { LinearSearchComponent } from './component/algorithms/linear-search/linear-search.component';
import { FormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule}from '@angular/material/card';

@NgModule({
  declarations: [
    ...AppRoutedComponents,
   
    NavBarComponent,
    FooterComponent,
    LinearSearchComponent
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSliderModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
