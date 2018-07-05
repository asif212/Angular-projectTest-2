import {Component ,Input ,Output , EventEmitter} from '@angular/core'

@Component({
    selector: 'radiobutton',
    templateUrl: 'app/employee/radioselection.component.html',

})
export class radioselection
{
    
    selectedRadioButton: string = "All";
    @Output()
    onRadioButtonChangeEvent: EventEmitter<string> = new EventEmitter < string>();

    @Input()
    all: number;

    @Input()
    male: number;

    @Input()
    female: number;

    onRadioButtonSelectionChange()
    {
        this.onRadioButtonChangeEvent.emit(this.selectedRadioButton);
        console.log(this.selectedRadioButton);
    }
}