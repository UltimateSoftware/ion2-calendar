import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

import { CalendarModal, CalendarModalOptions } from '../ion2-calendar';

@Component({
  selector: 'demo-modal-flex-range',
  template: `
    <ion-button (click)="openCalendar()">
      flex range - main: {{ currentMain }}
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
    from: null,
    to: null
  };

  constructor(public modalCtrl: ModalController, private toastCtrl: ToastController) {}

  async openCalendar() {
    this._toastWrap('Open with', this.dateRange);
    const options: CalendarModalOptions = {
      pickMode:  'range',
      title: `RANGE FLEX - main:${this.currentMain}`,
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
      this._toastWrap('Close with', { from: tempFrom, to: tempTo })

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

    this.currentMain = this.count % 2 === 0 ? 'end' : 'start';
    this.count++;
  }

    async _toastWrap(msg: string, dateRange: {from: Date, to: Date}) {
    const toast = await this.toastCtrl.create({
      message: `${msg} { start: ${dateRange.from}, end: ${dateRange.to}}`,
      duration: 3000,
    });
    toast.present();
  }
}
