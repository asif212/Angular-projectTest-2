import { Component} from '@angular/core';

@Component({
    selector: 'my-empdetail',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})

export class EmployeeDetails
{
    firstname: string = "asif";
    secondname: string = "moin";
    empno: number = 3202;
    age: number = 27;
}