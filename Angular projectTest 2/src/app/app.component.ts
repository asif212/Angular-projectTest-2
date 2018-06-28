import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>hello {{name}}</h1>`
})

export class AppComponent
{
    name: string = "Aquib";
}
