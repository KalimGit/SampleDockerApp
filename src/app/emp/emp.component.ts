import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../service/httpclient.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  employees: string[];

  constructor(private httpClientService: HttpclientService) { }

  ngOnInit() {
    this.httpClientService.getEmployeeDetails().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response){
    this.employees = response;
  }

}
