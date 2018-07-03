import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeDetails } from './employee/employee.componentnt';
import { employeelist } from './employee/employeelist.component';
import { employeetitlepipe } from './employee/employeetitle.pipe';


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, EmployeeDetails, employeelist, employeetitlepipe],
    bootstrap: [AppComponent]
 
})
export class AppModule { }
