import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:'ascend'
})

export class AscendingOrder implements PipeTransform{
    
    transform(values: any[], field:string) {
     if(field==null || field==undefined){
         return values;
     }


   
    let result:any[]=values.sort(
        
        (e1, e2)=>{
           
        let e1FieldValue=e1[field];
        let e2FieldValue=e2[field];
        
        if(typeof e1FieldValue=="number")
        {
        let compNumber= e1FieldValue-e2FieldValue;
         return compNumber;
        }
       
        if(typeof e1FieldValue=="string"){
          let compNumber=  e1FieldValue.localeCompare(e2FieldValue);
          return compNumber;
        }
        return 0;
    }
    );
    return result;
    }


}