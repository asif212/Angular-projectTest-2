import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl:'app/app.component.html'
})

export class AppComponent
{
    imageURl: string = "Images/Logo.JPG"
    pageHeader: string = "Employee details";
    isDisbaled: boolean = false;
    classestoapply: string = 'italicClass boldClass';
    applyboldclass: boolean = false;
        ;
}
