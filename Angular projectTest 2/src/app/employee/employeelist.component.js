"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_services_1 = require("./employee.services");
var employeelist = /** @class */ (function () {
    function employeelist(_employeeLists) {
        var _this = this;
        this._employeeLists = _employeeLists;
        this.selectedRadioButtonValue = "All";
        this._employeeLists.getEmployees().subscribe(function (employeeData) { return _this.employees = employeeData; });
    }
    employeelist.prototype.onSelectedRadioButtonValueChanged = function (selectedRadioButton) {
        this.selectedRadioButtonValue = selectedRadioButton;
    };
    employeelist.prototype.getTotalNumberOfEmployees = function () {
        return this.employees.length;
    };
    employeelist.prototype.getTotalNumberOfMaleEmployees = function () {
        return this.employees.filter(function (e) { return e.gender === "Male"; }).length;
    };
    employeelist.prototype.getTotalNumberOfFemaleEmployees = function () {
        return this.employees.filter(function (e) { return e.gender === "Female"; }).length;
    };
    employeelist = __decorate([
        core_1.Component({
            selector: 'my-emplist',
            templateUrl: 'app/employee/employeelist.component.html',
            styleUrls: ['app/employee/employeelist.component.css'],
            providers: [employee_services_1.employeeLists]
        }),
        __metadata("design:paramtypes", [employee_services_1.employeeLists])
    ], employeelist);
    return employeelist;
}());
exports.employeelist = employeelist;
//# sourceMappingURL=employeelist.component.js.map