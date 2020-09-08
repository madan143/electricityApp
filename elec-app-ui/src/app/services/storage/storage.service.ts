import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  paymentAmt: string;
  uniqueServNum : string;
  statusMsg : string;
  paymentAmtChange: Subject<string> = new Subject<string>();
  uniqueSerNumChange: Subject<string> = new Subject<string>();
  statusMsgChange: Subject<string> = new Subject<string>();

  constructor() {
    this.paymentAmtChange.subscribe((value) => {
      this.paymentAmt = value;
    });

    this.uniqueSerNumChange.subscribe((value) => {
      this.uniqueServNum = value;
    });

    this.statusMsgChange.subscribe((value) => {
      this.statusMsg = value;
    });

  }

  updatePaymentAmt(message: string) {
    this.paymentAmtChange.next(message);
  }

  updateUniqueSerNum(message: string) {
    this.uniqueSerNumChange.next(message);
  }

  updateStatusMsg(message: string) {
    this.statusMsgChange.next(message);
  }

  resetStatusMsg() {
    this.statusMsgChange.next();
  }

}
