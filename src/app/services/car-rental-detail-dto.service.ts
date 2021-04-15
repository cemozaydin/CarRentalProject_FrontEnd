import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarRentalDetailDtoResponseModel } from '../models/carRentalDetailDtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarRentalDetailDtoService {

  apiUrl="https://localhost:44365/api/rentals/getrentaldetails";

  constructor(private httpClient:HttpClient) { }

  getRentalDetails():Observable<CarRentalDetailDtoResponseModel>{
    return this.httpClient.get<CarRentalDetailDtoResponseModel>(this.apiUrl);
  };
}
