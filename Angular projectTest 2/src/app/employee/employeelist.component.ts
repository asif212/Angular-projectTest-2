import { Component } from '@angular/core';
import { employeeLists } from './employee.services';
import { IEmployees } from './employees'
@Component({
    selector: 'my-emplist',
    templateUrl: 'app/employee/employeelist.component.html',
    styleUrls: ['app/employee/employeelist.component.css'],
    providers: [employeeLists]
})


export class employeelist {
    selectedRadioButtonValue: string = "All";
    
    employees: IEmployees[];
    constructor(private _employeeLists: employeeLists) {
        this._employeeLists.getEmployees().subscribe((employeeData) => this.employees = employeeData);
    }

    onSelectedRadioButtonValueChanged(selectedRadioButton: string): void
    {
         this.selectedRadioButtonValue = selectedRadioButton;
    }

    getTotalNumberOfEmployees(): number {

        return this.employees.length;
    }

    getTotalNumberOfMaleEmployees(): number {

        return this.employees.filter(e => e.gender === "Male").length;
    }

    getTotalNumberOfFemaleEmployees(): number {

        return this.employees.filter(e => e.gender === "Female").length;
    }
}