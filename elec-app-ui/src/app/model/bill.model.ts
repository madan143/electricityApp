import { DatePipe } from '@angular/common';

export class BillDetails{

  public consumerName: string;
  public uniqueServNum: string;
  public serviceNumber: string;
  public eroName: string;
  public address : string;
  public currentMnthBillDt : DatePipe;
  public currentMnthBillAmt : string;
  public arrearMnthBillDt : Date;
  public arrearMnthBillAmt : string;
  public dueDt : Date;
  public totalAmt : string;
  public lastMnthBillDt : Date;
  public lastMnthBillAmt : string;
  public statusCd: string;
  public statusMsg : string;


  constructor(consumerName?: string, uniqueServNum?: string, serviceNumber?: string,
      eroName?: string, address?:string,currentMnthBillDt?:DatePipe,currentMnthBillAmt?:string,
      arrearMnthBillDt?:Date,arrearMnthBillAmt?:string,dueDt?:Date,totalAmt?:string,
      lastMnthBillDt?:Date,lastMnthBillAmt?:string,statusCd?:string,statusMsg?:string){
        this.consumerName = consumerName;
        this.uniqueServNum = uniqueServNum;
        this.serviceNumber = serviceNumber;
        this.eroName = eroName;
        this.address = address;
        this.currentMnthBillDt = currentMnthBillDt;
        this.currentMnthBillAmt = currentMnthBillAmt;
        this.arrearMnthBillDt = arrearMnthBillDt;
        this.arrearMnthBillAmt = arrearMnthBillAmt;
        this.dueDt = dueDt;
        this.totalAmt = totalAmt;
        this.lastMnthBillDt = lastMnthBillDt;
        this.lastMnthBillAmt = lastMnthBillAmt;
        this.statusCd = statusCd;
        this.statusMsg = statusMsg;
  }

}
