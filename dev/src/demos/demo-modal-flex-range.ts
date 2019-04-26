import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { CalendarModal, CalendarModalOptions } from '../ion2-calendar';

@Component({
  selector: 'demo-modal-flex-range',
  template: `
    <ion-button (click)="openCalendar()">
      flex range: {{ currentMain }}
    </ion-button>
  `,
})
export class DemoModalFlexRangeComponent {
  count = 0;
  currentMain = 'start';
  dateRange: {
    from: Date;
    to: Date;
  } = {
    // from: new Date(),
    // to: new Date(Date.now() + 24 * 60 * 60 * 45000 ),
    // to: this.add_years(new Date(), 10)
    // to: null

    from: null,
    to: null
  };

  constructor(public modalCtrl: ModalController) {}

  async openCalendar() {
    const options: CalendarModalOptions = {
      pickMode:  'range',
      title: `RANGE FLEX ${this.currentMain}`,
      defaultDateRange: this.dateRange,
      canBackwardsSelected: true,
      rangeFlex: { priorityAssignedTo: this.currentMain },
      clearLabel: 'CLEAR'
    };

    const myCalendar = await this.modalCtrl.create({
      component: CalendarModal,
      componentProps: { options },
    });

    myCalendar.present();

    const event: any = await myCalendar.onDidDismiss();
    const { data: date, role } = event;

    if (role === 'done') {
     let tempFrom = !!date.from ? date.from.dateObj : null , tempTo = !!date.to ? date.to.dateObj : null;
     if (date.from === null && !!date.to) {
      tempFrom = date.to.dateObj;
      tempTo = null;
     }

      this.dateRange = Object.assign(
        {},
        {
          from: tempFrom,
          to: tempTo,
        }
      );
    }
    console.log('role', role, 'date', date);

    this.currentMain = this.count % 2 === 0 ? 'end' : 'start';
    this.count++;
  }
}
