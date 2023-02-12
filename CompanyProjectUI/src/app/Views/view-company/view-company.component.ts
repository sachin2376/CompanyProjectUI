import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { company } from 'src/app/Models/api-models/company.model';
import { CompanyserviceService } from 'src/app/service/companyservice.service';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent implements OnInit {
    company:company = {
      companyId:'',
      companyName:'',
      location:'',
      count:0
    }
    companyId:string | null | undefined

    constructor(
      private route:ActivatedRoute,
      private companyService:CompanyserviceService,
      private snackbar:MatSnackBar,
      private router:Router){}
      isNew:boolean=false;
    ngOnInit(): void {
      this.companyId = this.route.snapshot.paramMap.get('id');
      console.log("Company ID : ", this.companyId);
      if(this.companyId)
      {
          if(this.companyId.trim().toLocaleLowerCase()==='Add'.toLocaleLowerCase())
          {
            this.isNew = true;
          }
          else
          {
            this.companyService.GetCompanyById(this.companyId)
            .subscribe(
              (successresponse) => {
                  console.log("Company => "+successresponse)
                  this.company = successresponse
              }
            )
          }
      }
    }



    SaveCompany()
    {
        this.companyService.UpdateCompany(this.company.companyId,this.company)
        .subscribe(
            (successresponse) =>
            {
                console.log("Record Updated");
                this.snackbar.open("Company Record Updated",'Ok',{
                  verticalPosition: 'top',
                  duration:2000,
                  panelClass:['green-snackbar', 'login-snackbar']
                }
                  );
            }
        )
    }

    DeleteCompany()
    {
        this.companyService.RemoveCompany(this.company.companyId)
        .subscribe(
            (successresponse) =>
            {
                console.log("Record Deleted");
                this.snackbar.open("Company Record Deleted",'Ok',{
                  verticalPosition: 'top',
                  duration:2000});
            }
        )

        setTimeout(() => {
          this.router.navigateByUrl('company')
        }, 2000);
    }


    AddCompany()
    {
        this.companyService.AddCompany(this.company)
        .subscribe(
          (successresponse) => {
            this.snackbar.open("Company record added",'Ok',{
              duration:2000,
              verticalPosition: 'top',
            });
          }
        )
    }
}
