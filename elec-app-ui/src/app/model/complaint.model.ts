import { Base } from "./base.model";

export class Complaint extends Base{

  public uniqueServNum: string;
  public issueCategory: string;
  public issueSubCategory: string;
  public nameOfComplainer: string;
  public mobileNumber: string;
  public email : string;
  public uploadDoc: Blob;


  constructor(uniqueServNum?: string, issueCategory?: string, issueSubCategory?: string,
    nameOfComplainer?: string, mobileNumber?:string,
    email?:string,uploadDoc?:Blob){
        super();
        this.uniqueServNum = uniqueServNum;
        this.issueCategory = issueCategory;
        this.issueSubCategory = issueSubCategory;
        this.nameOfComplainer = nameOfComplainer;
        this.mobileNumber = mobileNumber;
        this.email = email;
        this.uploadDoc = uploadDoc;
  }

}
