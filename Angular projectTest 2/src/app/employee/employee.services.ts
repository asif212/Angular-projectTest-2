import { Component, Injectable } from '@angular/core';
import { IEmployees } from './employees';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
@Injectable()
export class employeeLists 
{
    constructor(private _Http: Http) { }
    getEmployees(): Observable< IEmployees[]>
    {
        return this._Http.get("http://localhost:1970/api/employee").map((response: Response) => <IEmployees[]>response.json());
    }
}