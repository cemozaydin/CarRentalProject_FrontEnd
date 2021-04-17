import { Component, OnInit } from '@angular/core';
import { CustomerDetailDto } from 'src/app/models/customerDetailDto';
import { CustomerdetaildtoService } from 'src/app/services/customerdetaildto.service';

@Component({
  selector: 'app-customerdetaildto',
  templateUrl: './customerdetaildto.component.html',
  styleUrls: ['./customerdetaildto.component.css'],
})
export class CustomerdetaildtoComponent implements OnInit {
  customerDetails: CustomerDetailDto[] = [];
  dataLoaded = false;

  constructor(private customerDetailDto: CustomerdetaildtoService) {}

  ngOnInit(): void {
    this.getCustomerDetails();
  }

  getCustomerDetails() {
    this.customerDetailDto.getCustomerDetails().subscribe((response) => {
      this.customerDetails = response.data;
      this.dataLoaded=true;
    });
  }
}
