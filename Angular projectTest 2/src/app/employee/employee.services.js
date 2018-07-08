"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employeeLists = /** @class */ (function () {
    function employeeLists() {
    }
    employeeLists.prototype.getEmployees = function () {
        return [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '06/25/1988' },
            { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
            { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
            { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/14/1980' },
            { code: 'emp105', name: 'jony', gender: 'Male', annualSalary: 6500.9588, dateOfBirth: '02/25/2010' },
            { code: 'emp105', name: 'jony', gender: 'Female', annualSalary: 6500.9588, dateOfBirth: '02/25/2010' },
        ];
    };
    employeeLists = __decorate([
        core_1.Injectable()
    ], employeeLists);
    return employeeLists;
}());
exports.employeeLists = employeeLists;
//# sourceMappingURL=employee.services.js.map