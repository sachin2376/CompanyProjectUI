import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OnInit } from '@angular/core';
import { CompanyserviceService } from 'src/app/service/companyservice.service';
import { company } from 'src/app/Models/api-models/company.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  dataSource:MatTableDataSource<company>= new MatTableDataSource<company>()
  displayedColumns: string[] = ['companyName', 'location', 'count', 'edit'];

  @ViewChild(MatPaginator) matPaginator !: MatPaginator;
  @ViewChild(MatSort) matSort !:MatSort;
  constructor(private companyservice:CompanyserviceService)
  {}

  ngOnInit()
  {
      this.companyservice.GetCompanies()
      .subscribe(
        (successresponse) => {
          this.dataSource = new MatTableDataSource(successresponse);
          if(this.matPaginator)
          {
            this.dataSource.paginator = this.matPaginator;
          }
          if(this.matSort)
          {
            this.dataSource.sort = this.matSort;
          }
          console.log(successresponse);
        }
      );
  }

  filteredcompanies:string=''
  filterCompanies()
  {
      this.dataSource.filter = this.filteredcompanies.trim().toLocaleLowerCase();
  }

}
