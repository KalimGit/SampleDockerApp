import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Employee{
  constructor(
    public empId:string,
    public empName:string,
    public designation:string,
    public salary:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private httpClient: HttpClient) { }


  getEmployeeDetails(){
    console.log("test call");
    return this.httpClient.get<Employee[]>("http://localhost:8081/employees");
  
  }

}
