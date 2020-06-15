import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-dashboard',
  templateUrl: './school-dashboard.component.html',
  styleUrls: ['./school-dashboard.component.css']
})
export class SchoolDashboardComponent implements OnInit {

  elements: any = [];
  student;

  students;

  headElements = ['Name', 'Email', 'Id', 'Modules', 'Date', 'DateEdited', 'Action'];


  addModalForm(form: any, modalInstance: any) {
    const values: any = {
      id: this.elements.dataArray[this.elements.dataArray.length - 1]['id'] + 1,
      name: form[0].value,
      email: form[1].value,
      Id: form[2].value,
      module: form[3].value,
      date: form[4].value,
    };

    this.elements.push(values);
  };

  viewStudents(student) {
    this.student = student;
  }
  constructor() { 
  }

  ngOnInit(): void {
  }

}
