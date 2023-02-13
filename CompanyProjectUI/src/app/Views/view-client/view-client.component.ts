import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { client } from 'src/app/Models/api-models/client.model';
import { company } from 'src/app/Models/api-models/company.model';
import { ClientserviceService } from 'src/app/service/clientservice.service';
import { CompanyserviceService } from 'src/app/service/companyservice.service';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.css']
})
export class ViewClientComponent implements OnInit {

  companyList:company[]=[];
    constructor(
        private readonly route:ActivatedRoute,
        private readonly snackbar:MatSnackBar,
        private readonly clientService:ClientserviceService,
        private readonly companyService:CompanyserviceService
    ){}

    clientid:string | null | undefined;
    client:client =
    {
      clientId:'',
      firstName:'',
      lastName:'',
      email:'',
      birthDate:'',
      company: {
        companyId:'',
        companyName:'',
        count:0,
        location:''
      }
    }
    selected:string='option 1';

    isNew:boolean = false;
    ngOnInit(): void {
        this.route.paramMap.subscribe(
          (resp) => {
            this.clientid = resp.get('id')
          }
        )

        if(this.clientid)
        {
            this.companyService.GetCompanies().subscribe
            (
              (successresponse) => {
                console.log()
                this.companyList = successresponse;
              }
            )

            if(this.clientid.toLocaleLowerCase()==='Add'.trim().toLocaleLowerCase())
            {
                this.isNew=true;
            }
            else{
                this.clientService.GetClientById(this.clientid)
                .subscribe(
                  (successresponse) => {
                    console.log(successresponse);
                    this.client=successresponse;
                  }
                )
            }
        }
    }

    AddClient()
    {

    }

    SaveClient()
    {

    }

    DeleteClient()
    {

    }

    compareValues(value1:string,value2:string)
    {
      if(value1===value2)
        return true;
      return false;
    }
}
