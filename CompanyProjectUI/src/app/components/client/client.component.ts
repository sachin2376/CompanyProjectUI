import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { client } from 'src/app/Models/api-models/client.model';
import { ClientserviceService } from 'src/app/service/clientservice.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

    displayedColumns:string[] = ['clientId','firstName','email','birthDate','company','edit']

    @ViewChild(MatSort) matSort !: MatSort
    @ViewChild(MatPaginator) matPaginator !: MatPaginator

    constructor(
      private readonly clientService:ClientserviceService,
    ){}

    datasource:MatTableDataSource<client> = new MatTableDataSource<client>();
    ngOnInit(): void {

      this.clientService.GetClients()
      .subscribe(
        (successresponse) => {
            console.log(successresponse);
            this.datasource = new MatTableDataSource(successresponse);
            if(this.matPaginator)
            {
                this.datasource.paginator = this.matPaginator
            }

            if(this.matSort)
            {
                this.datasource.sort = this.matSort;
            }
        }
      )
    }

    filteredclients:string=''

    filterClients()
    {
        this.datasource.filter = this.filteredclients.trim().toLocaleLowerCase();
    }


}
