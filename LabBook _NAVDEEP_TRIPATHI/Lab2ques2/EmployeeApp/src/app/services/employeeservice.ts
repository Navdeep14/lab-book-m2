import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable()
export class EmployeeService{

 store=[
   new Employee(2,'abc',10000,"JAVA"),
   new Employee(1,'vibhor',20000,"Angular"),
   new Employee(5,'shubham',20000,"Js"),
   new Employee(4,'ritu',20000,"Java"),
   new Employee(3,'shreya',20000,"Angular")
];   
 
 

  fetchAllEmployees(): Employee[]{
      return this.store;
  }


}