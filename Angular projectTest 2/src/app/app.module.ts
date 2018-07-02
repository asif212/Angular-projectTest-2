import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeDetails } from './employee/employee.componentnt';

@NgModule({
    imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent ,EmployeeDetails],
    bootstrap: [AppComponent]
 
})
export class AppModule { }
