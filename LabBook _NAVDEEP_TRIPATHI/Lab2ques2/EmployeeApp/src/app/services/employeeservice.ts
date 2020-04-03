import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable()
export class EmployeeService{

 store=[
   new Employee(2,'Navdeep',10000,"JAVA"),
   new Employee(1,'Anirudh',20000,"Angular"),
   new Employee(5,'Krishna',20000,"Js"),
   new Employee(4,'golu',20000,"Java"),
   new Employee(3,'molu',20000,"Angular")
];   
 
 

  fetchAllEmployees(): Employee[]{
      return this.store;
  }


}
