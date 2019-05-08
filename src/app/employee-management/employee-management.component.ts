import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee } from '../service/http-client.service';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})

export class EmployeeManagementComponent implements OnInit {
  employees: Employee[];

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(response =>
      this.handleSuccesfulResponse(response),
    );
  }

  deleteEmployee(emp: Employee): void {
    this.httpClientService.deleteEmployee(emp).subscribe(data => {
      this.employees = this.employees.filter(u => u !== emp);
    })
  };

  handleSuccesfulResponse(response) {
    this.employees = response;
  }

}
