import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';


import {MatIconModule} from '@angular/material/icon';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { InstructorComponent } from './components/instructor/instructor.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentFormComponent,
    InstructorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  /*
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIconSet(
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')
    );
  }*/
}
