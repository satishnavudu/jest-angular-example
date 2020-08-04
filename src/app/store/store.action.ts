
import { Action } from '@ngrx/store';
import { GridData } from '../grid-data';

 export enum gridActionTypes{
     ADD_DATA ="ADD_DATA",
     DELETE_DATA="DELETE_DATA"
 }

export class loadDataAction implements Action{
readonly type=gridActionTypes.ADD_DATA;
constructor(public payLoad:GridData){}
}

export class deleteAction implements Action{
    readonly type=gridActionTypes.DELETE_DATA;
    constructor(public payLoad:any){}
}

export type  gridEnum=loadDataAction|deleteAction