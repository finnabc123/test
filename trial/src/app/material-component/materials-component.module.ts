import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as materials from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    materials.MatSelectModule,
    materials.MatInputModule,
    materials.MatIconModule,
    materials.MatCardModule,
    materials.MatButtonModule,
    materials.MatTableModule,
    materials.MatDividerModule
  ],
  exports:[
    CommonModule,
    materials.MatSelectModule,
    materials.MatInputModule,
    materials.MatIconModule,
    materials.MatCardModule,
    materials.MatButtonModule,
    materials.MatTableModule,
    materials.MatDividerModule
  ]
})
export class MaterialsComponentModule { }
