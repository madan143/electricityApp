
export class User{

  public username: string;
  public customerName: string;
  public mobileNumber: number;
  public email : string;
  public confirmEmail : string;
  public address : string;
  public password : string;
  public confirmPassword : string;
  public hintQuestion : string;
  public hintAnswer : string;

  constructor(username?: string, customerName?: string, mobileNumber?: number, email?: string, confirmEmail?:string,
      address?:string,password?:string,confirmPassword?:string,hintQuestion?:string,hintAnswer?:string){
        this.username = username;
        this.customerName = customerName;
        this.mobileNumber = mobileNumber;
        this.email = email;
        this.confirmEmail = confirmEmail;
        this.address = address;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.hintQuestion = hintQuestion;
        this.hintAnswer = hintAnswer;
  }

}
