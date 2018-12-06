import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UsagerListTableComponent } from './Components/usager-list-table/usager-list-table.component';
import { SelectedUsagerTableComponent } from './Components/selected-usager-table/selected-usager-table.component';
import { MaterialsComponentModule } from './material-component/materials-component.module';
import { AppRoutingModule } from './app-routing-module';
import { DataSharingService } from './Services/data-sharing.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsagerListTableComponent,
    SelectedUsagerTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsComponentModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DataSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
