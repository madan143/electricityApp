import { Base } from "./base.model";

export class Payment extends Base{

  public uniqueServNum: string;
  public paymentType: string;
  public paymentAmt: string;
  public nameOnCard: string;
  public creditCardNum: string;
  public expiration: string;
  public cvv: string;

  constructor(uniqueServNum?: string, paymentType?: string, paymentAmt?: string,
    nameOnCard?: string, creditCardNum?:string,
    expiration?:string,cvv?:string){
        super();
        this.uniqueServNum = uniqueServNum;
        this.paymentType = paymentType;
        this.paymentAmt = paymentAmt;
        this.nameOnCard = nameOnCard;
        this.creditCardNum = creditCardNum;
        this.expiration = expiration;
        this.cvv = cvv;
  }

}
