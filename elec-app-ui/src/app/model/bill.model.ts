
export class Bill{

  public consumerName: string;
  public uniqueServNum: string;
  public serviceNumber: string;
  public eroName: string;
  public address : string;
  public currentMnthBillDt : Date;
  public currentMnthBillAmt : string;
  public arrearMnthBillDt : Date;
  public arrearMnthBillAmt : string;
  public dueDt : Date;
  public totalAmt : string;
  public lastMnthBillDt : Date;
  public lastMnthBillAmt : string;

  constructor(consumerName?: string, uniqueServNum?: string, serviceNumber?: string,
      eroName?: string, address?:string,currentMnthBillDt?:Date,currentMnthBillAmt?:string,
      arrearMnthBillDt?:Date,arrearMnthBillAmt?:string,dueDt?:Date,totalAmt?:string,
      lastMnthBillDt?:Date,lastMnthBillAmt?:string){
        this.consumerName = consumerName;
        this.uniqueServNum = uniqueServNum;
        this.serviceNumber = serviceNumber;
        this.eroName = eroName;
        this.address = address;
        this.currentMnthBillDt = currentMnthBillDt;
        this.currentMnthBillAmt = currentMnthBillAmt;
        this.arrearMnthBillDt = currentMnthBillDt;
        this.arrearMnthBillAmt = currentMnthBillAmt;
        this.dueDt = dueDt;
        this.totalAmt = totalAmt;
        this.lastMnthBillDt = lastMnthBillDt;
        this.lastMnthBillAmt = lastMnthBillAmt;
  }

}
