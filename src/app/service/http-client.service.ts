import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Employee {
  constructor(
    public teamName: string,
    public id: string,
    public name: string,
    public salary: string) { }
}

@Injectable({
  providedIn: 'root'
})


export class HttpClientService {
  constructor(private httpClient: HttpClient) { }


  getEmployees() {
    console.log("fetching employees")
    //console.log("data here ",JSON.stringify(this.httpClient.get<Employee[]>('http://localhost:3000/rest/users/all')));
    return this.httpClient.get<Employee[]>('http://localhost:3000/rest/users/all');
  }

  public deleteEmployee(emp) {
    return this.httpClient.delete<Employee>('http://localhost:3000/rest/users/' + emp.id);
  }

  addEmployee(emp) {
    //console.log("adding employee"+JSON.stringify(emp));
    return this.httpClient.post<Employee>('http://localhost:3000/rest/users/addmember', emp);
  }
  searchEmployee(id) {
    return this.httpClient.get<Employee[]>('http://localhost:3000/rest/users/search/' + id);
  }



}

