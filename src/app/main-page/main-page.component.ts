import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  public developers: string[] = [
    'Flutter Developer',
    'Angular Developer',
    'dotNet Developer',
    'React Developer',
    'Testing Engineer',
  ];
  public employeeForm: any = FormGroup;
  public date = new FormControl(new Date());
  public key: number = 1;
  public buttonDisabled: boolean = false;
  //public employeeName!: string;

  constructor(
    private fb: FormBuilder,
    public LocalStorage: LocalStorageService,
    public employeeData: EmployeeDataService
  ) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      employeeName: [''],
      designation: [''],
      dateTo: [''],
      dateFrom: this.date,
      ID_old: [''],
      ID_new: [''],
    });
  }

  submit() {
    this.employeeData.name = this.employeeForm.value['employeeName'];
    this.employeeData.designation = this.employeeForm.value['designation'];
    this.employeeData.dateFrom =
      this.employeeForm.value['dateFrom'].toDateString();
    this.employeeData.dateTo = this.employeeForm.value['dateTo'].toDateString();

    this.LocalStorage.submit(
      'Employee Name',
      this.employeeForm.value['employeeName']
    );
    this.LocalStorage.submit(
      'Designation',
      this.employeeForm.value['designation']
    );
    this.LocalStorage.submit('Date From', this.employeeForm.value['dateFrom']);
    this.LocalStorage.submit('Date To', this.employeeForm.value['dateTo']);
  }
}
