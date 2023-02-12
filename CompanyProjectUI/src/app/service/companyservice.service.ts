import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { company } from '../Models/api-models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyserviceService {

  private readonly BaseUrl:string="https://localhost:7060/api/v1.0/Company";
  constructor(private httpclient:HttpClient) {

  }

  GetCompanies():Observable<company[]>
  {
    return this.httpclient.get<company[]>(this.BaseUrl);
  }

  GetCompanyById(companyId:string) : Observable<company>
  {
    return this.httpclient.get<company>(this.BaseUrl+"/"+companyId);
  }

  AddCompany(company:company):Observable<company>
  {
    return this.httpclient.post<company>(this.BaseUrl,company);
  }

  UpdateCompany(companyId:string,company:company):Observable<company>
  {
    return this.httpclient.put<company>(this.BaseUrl+"/"+companyId,company);
  }

  RemoveCompany(companyId:string):Observable<company>
  {
    return this.httpclient.delete<company>(this.BaseUrl+"/"+companyId);
  }
}
