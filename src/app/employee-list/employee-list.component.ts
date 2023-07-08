import { Component } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  myData = this.employeeData;
  constructor(
    public employeeData: EmployeeDataService,
    public dialog: MatDialog
  ) {}
  inputData() {
    let myData;
    myData = this.employeeData;
  }
  edit() {
    this.dialog.open(DialogBoxComponent);
  }
  delete() {
    this.dialog.open(DialogBoxComponent);
  }
}
