import { Component, Injectable } from '@angular/core';
import {IEmployees} from './employees';

@Injectable()
export class employeeLists implements IEmployees
{
    
    getEmployees(): IEmployees[]
    {
        return [            
                { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '06/25/1988' },
                { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
                { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
                { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/14/1980' },
                { code: 'emp105', name: 'jony', gender: 'Male', annualSalary: 6500.9588, dateOfBirth: '02/25/2010' },
                { code: 'emp105', name: 'jony', gender: 'Female', annualSalary: 6500.9588, dateOfBirth: '02/25/2010' },

            ];
    }
}