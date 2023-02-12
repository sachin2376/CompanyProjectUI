import { company } from "./company.model";

export interface client{
  clientId:string;
  firstName:string;
  lastName:string;
  email:string;
  birthDate:string;
  company:company;
}
