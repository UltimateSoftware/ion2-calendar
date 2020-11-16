"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthPickerComponent = void 0;
var core_1 = require("@angular/core");
var calendar_model_1 = require("../calendar.model");
var config_1 = require("../config");
var MonthPickerComponent = /** @class */ (function () {
    function MonthPickerComponent() {
        this.color = config_1.defaults.COLOR;
        this.select = new core_1.EventEmitter();
        this._thisMonth = new Date();
        this._monthFormat = config_1.defaults.MONTH_FORMAT;
        this.MONTH_FORMAT = 'MMMM';
    }
    Object.defineProperty(MonthPickerComponent.prototype, "monthFormat", {
        get: function () {
            return this._monthFormat;
        },
        set: function (value) {
            if (Array.isArray(value) && value.length === 12) {
                this._monthFormat = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    MonthPickerComponent.prototype._onSelect = function (month) {
        this.select.emit(month);
    };
    MonthPickerComponent.prototype.getDate = function (month) {
        return new Date(this._thisMonth.getFullYear(), month, 1);
    };
    MonthPickerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ion-calendar-month-picker',
                    template: "\n    <div [class]=\"'month-picker ' + color\">\n      <div class=\"month-packer-item\"\n           [class.this-month]=\" i === _thisMonth.getMonth() && month.original.year === _thisMonth.getFullYear()\"\n           *ngFor=\"let item of _monthFormat; let i = index\">\n        <button type=\"button\" (click)=\"_onSelect(i)\" [attr.aria-label]=\"getDate(i) | date:MONTH_FORMAT\">{{ item }}</button>\n      </div>\n    </div>\n  ",
                    styles: [":host .month-picker {\n  margin: 20px 0;\n  display: inline-block;\n  width: 100%; }\n\n:host .month-packer-item {\n  width: 25%;\n  box-sizing: border-box;\n  float: left;\n  height: 50px;\n  padding: 5px; }\n  :host .month-packer-item button {\n    border-radius: 32px;\n    width: 100%;\n    height: 100%;\n    font-size: 0.9em;\n    background-color: transparent; }\n\n:host .month-picker.primary .month-packer-item.this-month button {\n  border: 1px solid var(--ion-color-primary); }\n\n:host .month-picker.primary .month-packer-item.active button {\n  background-color: var(--ion-color-primary);\n  color: #fff; }\n\n:host .month-picker.secondary .month-packer-item.this-month button {\n  border: 1px solid var(--ion-color-secondary); }\n\n:host .month-picker.secondary .month-packer-item.active button {\n  background-color: var(--ion-color-secondary);\n  color: #fff; }\n\n:host .month-picker.danger .month-packer-item.this-month button {\n  border: 1px solid var(--ion-color-danger); }\n\n:host .month-picker.danger .month-packer-item.active button {\n  background-color: var(--ion-color-danger);\n  color: #fff; }\n\n:host .month-picker.dark .month-packer-item.this-month button {\n  border: 1px solid var(--ion-color-dark); }\n\n:host .month-picker.dark .month-packer-item.active button {\n  background-color: var(--ion-color-dark);\n  color: #fff; }\n\n:host .month-picker.light .month-packer-item.this-month button {\n  border: 1px solid var(--ion-color-light); }\n\n:host .month-picker.light .month-packer-item.active button {\n  background-color: var(--ion-color-light);\n  color: #9e9e9e; }\n\n:host .month-picker.transparent {\n  background-color: transparent; }\n  :host .month-picker.transparent .month-packer-item.this-month button {\n    border: 1px solid var(--ion-color-light); }\n  :host .month-picker.transparent .month-packer-item.active button {\n    background-color: var(--ion-color-light);\n    color: #9e9e9e; }\n\n:host .month-picker.cal-color .month-packer-item.this-month button {\n  border: 1px solid; }\n\n:host .month-picker.cal-color .month-packer-item.active button {\n  color: #fff; }\n"]
                },] }
    ];
    MonthPickerComponent.ctorParameters = function () { return []; };
    MonthPickerComponent.propDecorators = {
        month: [{ type: core_1.Input }],
        color: [{ type: core_1.Input }],
        select: [{ type: core_1.Output }],
        monthFormat: [{ type: core_1.Input }]
    };
    return MonthPickerComponent;
}());
exports.MonthPickerComponent = MonthPickerComponent;
//# sourceMappingURL=month-picker.component.js.map