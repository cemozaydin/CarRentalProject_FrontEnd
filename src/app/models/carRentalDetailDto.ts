export interface CarRentalDetailDto{
    rentalId:number;
    customerName:string;
    customerLastName:string;
    customerCompanyName:string;
    carName:string;
    brandName:string;
    colorName:string;
    dailyPrice:number;
    rentDate:Date;
    returnDate:Date;
}