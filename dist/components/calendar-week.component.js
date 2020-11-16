"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarWeekComponent = void 0;
var core_1 = require("@angular/core");
var config_1 = require("../config");
var CalendarWeekComponent = /** @class */ (function () {
    function CalendarWeekComponent() {
        this._weekArray = config_1.defaults.WEEKS_FORMAT;
        this._displayWeekArray = this._weekArray;
        this._weekStart = 0;
        this.color = config_1.defaults.COLOR;
    }
    Object.defineProperty(CalendarWeekComponent.prototype, "weekArray", {
        set: function (value) {
            if (value && value.length === 7) {
                this._weekArray = __spreadArrays(value);
                this.adjustSort();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarWeekComponent.prototype, "weekStart", {
        set: function (value) {
            if (value === 0 || value === 1) {
                this._weekStart = value;
                this.adjustSort();
            }
        },
        enumerable: false,
        configurable: true
    });
    CalendarWeekComponent.prototype.adjustSort = function () {
        if (this._weekStart === 1) {
            var cacheWeekArray = __spreadArrays(this._weekArray);
            cacheWeekArray.push(cacheWeekArray.shift());
            this._displayWeekArray = __spreadArrays(cacheWeekArray);
        }
        else if (this._weekStart === 0) {
            this._displayWeekArray = __spreadArrays(this._weekArray);
        }
    };
    CalendarWeekComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ion-calendar-week',
                    template: "\n    <ion-toolbar [class]=\"'week-toolbar ' + color\" no-border-top>\n      <ul [class]=\"'week-title ' + color\">\n        <li *ngFor=\"let w of _displayWeekArray\">{{ w }}</li>\n      </ul>\n    </ion-toolbar>\n  ",
                    styles: [":host .toolbar-background-md,\n:host .toolbar-background-ios {\n  background: transparent; }\n\n:host .week-toolbar {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-bottom: 0;\n  --padding-top: 0; }\n  :host .week-toolbar.primary {\n    --background: var(--ion-color-primary); }\n  :host .week-toolbar.secondary {\n    --background: var(--ion-color-secondary); }\n  :host .week-toolbar.danger {\n    --background: var(--ion-color-danger); }\n  :host .week-toolbar.dark {\n    --background: var(--ion-color-dark); }\n  :host .week-toolbar.light {\n    --background: var(--ion-color-light); }\n  :host .week-toolbar.transparent {\n    --background: transparent; }\n  :host .week-toolbar.toolbar-md {\n    min-height: 44px; }\n\n:host .week-title {\n  margin: 0;\n  height: 44px;\n  width: 100%;\n  padding: 15px 0;\n  color: #fff;\n  font-size: 0.9em; }\n  :host .week-title.light, :host .week-title.transparent {\n    color: #9e9e9e; }\n  :host .week-title li {\n    list-style-type: none;\n    display: block;\n    float: left;\n    width: 14%;\n    text-align: center; }\n  :host .week-title li:nth-of-type(7n),\n  :host .week-title li:nth-of-type(7n + 1) {\n    width: 15%; }\n"]
                },] }
    ];
    CalendarWeekComponent.ctorParameters = function () { return []; };
    CalendarWeekComponent.propDecorators = {
        color: [{ type: core_1.Input }],
        weekArray: [{ type: core_1.Input }],
        weekStart: [{ type: core_1.Input }]
    };
    return CalendarWeekComponent;
}());
exports.CalendarWeekComponent = CalendarWeekComponent;
//# sourceMappingURL=calendar-week.component.js.map