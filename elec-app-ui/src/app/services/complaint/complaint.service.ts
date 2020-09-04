import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Complaint } from "src/app/model/complaint.model";
import { AppConstants } from 'src/app/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private http:HttpClient) { }

  createComplaint(complaint : Complaint){
    return this.http.post(AppConstants.COMPLAINT_API_URL,complaint);
  }

}
