export declare class CalendarWeekComponent {
    _weekArray: string[];
    _displayWeekArray: string[];
    _weekStart: number;
    color: string;
    constructor();
    set weekArray(value: string[]);
    set weekStart(value: number);
    adjustSort(): void;
}
