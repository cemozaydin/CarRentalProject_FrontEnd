import { Component, OnInit } from '@angular/core';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarDetailResponseModel } from 'src/app/models/carDetailDtoResponseModel';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  carDetails:CarDetailDto[]=[];
  dataLoaded=false;

  constructor(private cardetailService:CarDetailService) { }

  ngOnInit(): void {
    this.getCarDetails();
  }

  getCarDetails(){
    this.cardetailService.getCarDetails().subscribe(response=>{
      this.carDetails=response.data;
      this.dataLoaded=true;
    });
  }
}
