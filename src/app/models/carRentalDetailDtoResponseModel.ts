import { CarRentalDetailDto } from "./carRentalDetailDto";
import { ResponseModel } from "./responseModel";

export interface CarRentalDetailDtoResponseModel extends ResponseModel{
    data:CarRentalDetailDto[];
}