import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import {StoreModule} from '@ngrx/store'
import { gridReducer } from './store/store.reducer';
import { FormsModule } from '@angular/forms';
import { ClickableComponent } from './clickableComponent.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
    AgGridComponent,
    ClickableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([ClickableComponent]),
    FormsModule,
    StoreModule.forRoot({grid:gridReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
