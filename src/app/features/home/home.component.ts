import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements  OnInit{
  submittedData : any;
  constructor(private  dataService: DataService){}
  
  ngOnInit(): void {
    this.submittedData=this.dataService.getSubmittedData();
  }
  name: string = 'Shubham Singh Rajput';
  age: number = 24;
  month: any = '10/04/2024';
  address: any =' Patna , India';
  names: string[] = ["Irfan", "Mishra", "Arun","Abhay"];
  empCodes: number[] = [1, 2, 3, 4, 5];
  employees: any[] = [1, "two", true, { name: "Pankaj" }];
  isActive: boolean = true;
  testFunction(){
      enum Department {   
        Development, 
        Sales,  
        HR
        }
        let selectedDepartment: Department = Department.Sales;
    }
  }
