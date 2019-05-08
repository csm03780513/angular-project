import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee } from '../service/http-client.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit {

  user: Employee = new Employee("", "", "", "");

  constructor(private httpClient: HttpClientService) { }

  ngOnInit() {
  }

  addEmployee(): void {
    this.httpClient.addEmployee(this.user).subscribe(
      data => {
      alert("Employee was added successfully");
    });
  }

}
