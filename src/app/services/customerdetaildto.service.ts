import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDetailDtoResponseModel } from '../models/customerDetailDtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerdetaildtoService {
  
  apiUrl="https://localhost:44365/api/customers/getcustomerdetails";

  constructor(private httpClient:HttpClient) { }

  getCustomerDetails():Observable<CustomerDetailDtoResponseModel>{
    return this.httpClient.get<CustomerDetailDtoResponseModel>(this.apiUrl);
  }
}
