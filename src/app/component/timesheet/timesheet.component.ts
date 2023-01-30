import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {
  date:any;
  form!:FormGroup;
  fieldData:any;

  constructor(private service : ApiService,private formbuilder : FormBuilder) {
     setInterval(() =>{
      const currentDate = new Date();
      this.date = currentDate.toLocaleTimeString();
       }, 1000);
   }

  ngOnInit(): void {
    this.getEmpData();
    this.form = this.formbuilder.group({
      jira : ['',Validators.required],
      Desc : ['',Validators.required],
      status : ['',Validators.required],
      in : ['',Validators.required],
      out : ['',Validators.required],
      Date : ['',Validators.required],
    })
  }


  getEmpData(){
    this.service.getData().subscribe({
      next:(data)=>{
        this.fieldData = data;
      }
    })
  }

  onClick(){
    if(this.form.valid){
      this.service.postData(this.form.value)
      .subscribe({
        next:(res)=>{
          this.getEmpData();
          this.form.reset();
        },
        error:()=>{
          alert('unable to add')
        }
      })
    }
  }

  remove(){
    this.service.deletedata
  }
}
