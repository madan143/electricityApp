import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/services/complaint/complaint.service';
import { Complaint } from 'src/app/model/complaint.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {
  reader = new FileReader();
  model = new Complaint();
  constructor(private complaintService:ComplaintService) { }

  ngOnInit(): void {
  }

  submitNewComplaint(registerationForm: NgForm){
    this.complaintService.createComplaint(this.model).subscribe(
      responseData => {
        registerationForm.resetForm();
        this.model.statusCd = '200';

      },error => {
        this.model.statusCd = '500';
      });
  }

  handleFileInput(files: FileList) {
    const file = files.item(0);
    this.reader.onload = () => {
      this.reader.readAsArrayBuffer(file);
    };

}

}
