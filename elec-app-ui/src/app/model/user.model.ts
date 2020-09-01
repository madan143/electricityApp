
export class User{

  public username: string;
  public customerName: string;
  public mobileNumber: string;
  public email : string;
  public confirmEmail : string;
  public address : string;
  public password : string;
  public confirmPassword : string;
  public hintQuestion : string;
  public hintAnswer : string;
  public uniqueServNum: string;
  public issueCategory: string;
  public issueSubCategory: string;
  public uploadDoc: string|any;


  constructor(username?: string, customerName?: string, mobileNumber?: string, email?: string, confirmEmail?:string,
      address?:string,password?:string,confirmPassword?:string,hintQuestion?:string,hintAnswer?:string,
      uniqueServNum?:string,issueCategory?: string,issueSubCategory?: string,uploadDoc?: string|any){
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
        this.uniqueServNum = uniqueServNum;
        this.issueCategory = issueCategory;
        this.issueSubCategory = issueSubCategory;
        this.uploadDoc = uploadDoc;
  }

}
