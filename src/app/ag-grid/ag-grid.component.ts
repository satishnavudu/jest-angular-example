import { Component, OnInit } from '@angular/core';
import { GridData } from '../grid-data';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import { gridReducer } from '../store/store.reducer';
import { gridActionTypes, loadDataAction, deleteAction } from '../store/store.action';
import { ClickableComponent } from '../clickableComponent.component';


@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit {
 rowData:Observable<GridData>;
 localRowData:any={
  make:'', 
  model: '', 
  price: null,

 };
 columnDefs: any[] = [
  {field: "make"},
  {field: "model"},
  {field: "price"},
  {field: "delete"}
];
  constructor(public store:Store<{gridData:GridData[]}>) { }
  
  ngOnInit(): void {
   this.rowData=this.store.select<any>("grid")
  }



  deleteData(){
    this.store.dispatch(new deleteAction(1))
  }

  title = 'app';

addToTable(){

  this.store.dispatch(new loadDataAction(this.localRowData))
  this.localRowData={
    make:'', 
    model: '', 
    price: null,
  
   };
}


}
