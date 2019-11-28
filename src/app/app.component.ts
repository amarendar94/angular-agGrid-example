import { GridServiceService } from './grid-service.service';
import { Component } from '@angular/core';

import {AllCommunityModules} from '@ag-grid-community/all-modules';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-agGrid-example';

  private gridApi;
  private gridColumnApi;
  public modules = AllCommunityModules;

  private columnDefs;
  //private defaultColDef;
  //private rowModelType;
  private rowData;

  constructor(private gridService: GridServiceService) {
//    this.columnDefs = [];
//     this.rowModelType = "clientSide";
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridService.getGridConfig().subscribe(data=>{
      this.columnDefs = data.map(obj => {

        //obj will be each element in data array 
        console.log(obj)

        //we are returning modified form of obj and forming a new array of objects with required propertied
        return {
        field: obj.fieldName
        headerName: obj.header
        hide: obj.hidden
        }
      })
    })
    this.gridService.getGridData().subscribe(data=>{
      this.rowData = data
    })
  }
}

