import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee } from '../service/http-client.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {

  user: Employee = new Employee("", "", "", "");

  constructor(private httpClientService: HttpClientService) { }
  employee: Employee[];

  ngOnInit() {
  }

  searchEmployee(): void {
    this.httpClientService.searchEmployee(this.user.id).subscribe(response => {
      this.handleSuccessfulResponse(response);
    });
  }

  handleSuccessfulResponse(response) {
    alert("search complete" + JSON.stringify(response));
  }

}
