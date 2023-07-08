import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDataService {
  public name: string = '';
  public designation: string = '';
  public dateFrom: string = '';
  public dateTo: string = '';
  constructor() {}
}
