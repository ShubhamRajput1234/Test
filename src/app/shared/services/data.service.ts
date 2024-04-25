import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private submittedData: any;

  constructor() { }
  setSubmittedData(data : any){
  this.submittedData= data;
  
}
getSubmittedData(){
  return this.submittedData;
}
}
