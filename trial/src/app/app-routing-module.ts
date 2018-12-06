import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsagerListTableComponent } from './Components/usager-list-table/usager-list-table.component';
import { SelectedUsagerTableComponent } from './Components/selected-usager-table/selected-usager-table.component';


const routes: Routes = [
    { path: 'usagerList', component: UsagerListTableComponent },
    { path: 'selectedUsagerList', component: SelectedUsagerTableComponent },
    { path: '', component: UsagerListTableComponent, pathMatch:'full' },

  ];


@NgModule({
    imports:[RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}