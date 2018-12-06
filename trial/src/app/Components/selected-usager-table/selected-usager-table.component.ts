import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { UagerModel } from '../../Models/uager-model';
import { DataSharingService } from '../../Services/data-sharing.service';

@Component({
  selector: 'app-selected-usager-table',
  templateUrl: './selected-usager-table.component.html',
  styleUrls: ['./selected-usager-table.component.css']
})
export class SelectedUsagerTableComponent implements OnInit {
  tableData: any
  displayedColumns: string[] = ['symbol', 'full_name', 'country'];
  dataSource = new MatTableDataSource<UagerModel>(this.tableData);

  selectRow: any[] = []

  constructor(
    private route: Router,
    private dataSharingService: DataSharingService) { }

  ngOnInit() {
    this.tableData = this.dataSharingService.selectedData;
    this.dataSource = new MatTableDataSource<UagerModel>(this.tableData);
  }

  /** Go to Usager List Screen Function */
  gotoUsagerList() {
    this.route.navigate(['/usagerList']);
  }

}

