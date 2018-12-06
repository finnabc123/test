import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material';
import { UagerModel } from '../../Models/uager-model';
import { UsagerService } from '../../Services/usager.service';
import { Router } from '@angular/router';
import { DataSharingService } from '../../Services/data-sharing.service';
import { NgForm } from '@angular/forms';
import { delay } from 'q';


@Component({
  selector: 'app-usager-list-table',
  templateUrl: './usager-list-table.component.html',
  styleUrls: ['./usager-list-table.component.css']
})
export class UsagerListTableComponent implements OnInit {
  tableData: any
  displayedColumns: string[] = ['symbol', 'full_name', 'country'];
  dataSource = new MatTableDataSource<UagerModel>(this.tableData);

  selectRow: any[] = []

  constructor(private usagerService: UsagerService,
    private route: Router,
    private dataSharingService: DataSharingService) { }

  ngOnInit() {
    this.usagerService.getUserList().subscribe(val => {
      this.tableData = val;
      this.dataSource = new MatTableDataSource<UagerModel>(this.tableData);
      if (this.dataSharingService.selectedData.length > 0) {
        this.selectRow = this.dataSharingService.selectedData;
      }
    })
  }

  /** Select/Unselect Usager Function */
  selectedRow(element: UagerModel, indx: number) {
    if (!element.highlighted) {
      this.selectRow.push(element);
    } else {
      this.selectRow.forEach((el, index) => {
        if (el.id == element.id) {
          this.selectRow.splice(index, 1);
        }
      });
    }
    element.highlighted = !element.highlighted;
    this.dataSharingService.selectedData = this.selectRow;

  }

  /** Go to Selected Usager Screen Function */
  gotoSelectedScreen() {
    this.route.navigate(['/selectedUsagerList']);
  }

  /** Cancel Selected Usager Function */
  cancelSelectRow(searchValue: NgForm) {
    searchValue.resetForm();
    this.usagerService.getUserList().subscribe(val => {
      this.tableData = val;
      this.dataSource = new MatTableDataSource<UagerModel>(this.tableData);
      if (this.dataSharingService.selectedData.length > 0) {
        this.selectRow = this.dataSharingService.selectedData;
      }
      this.dataSource.filteredData.forEach(ele => {
        ele.highlighted = false;
      })
      this.dataSharingService.selectedData = []
      this.selectRow = [];
    })
  }

  /** Filter Usager Function */
  SearchUsagers(searchValue: NgForm) {
    this.dataSource.filter = searchValue.form.value.searchUsager.trim().toLowerCase();
  }

}
