import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { client } from '../Models/api-models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientserviceService {

  constructor(private httpclient:HttpClient) { }
  private readonly BaseUrl:string='https://localhost:7060/api/v1.0/Client';

  GetClients():Observable<client[]>
  {
    return this.httpclient.get<client[]>(this.BaseUrl);
  }

  GetClientById(clientid:string):Observable<client>
  {
    return this.httpclient.get<client>(this.BaseUrl+"/"+clientid);
  }

  AddClient(client:client):Observable<client>
  {
    return this.httpclient.post<client>(this.BaseUrl,client);
  }

  SaveClient(clientid:string,client:client):Observable<client>
  {
    return this.httpclient.put<client>(this.BaseUrl+client,client);
  }

  DeleteClient(clientid:string):Observable<client>
  {
    return this.httpclient.delete<client>(this.BaseUrl+clientid);
  }
}
