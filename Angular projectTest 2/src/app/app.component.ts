import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl:'app/app.component.html'
})

export class AppComponent
{
    myname1: string = "asif";
    imageURl: string = "Images/Logo.JPG";
    pageHeader: string = "Employee details";
    isDisbaled: boolean = false;
    classestoapply: string = 'italicClass boldClass';
    applyboldclass: boolean = false;
    
    applyClasses()
    {   
        let classes =
        {
            italicClass : this.isDisbaled,
            boldClass : this.applyboldclass
        };
        return classes;
    }

    clickMe(): void
    {
        console.log("button clicked");
    }
}
