import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CountryDialogComponent } from '../country-dialog/country-dialog.component';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component  {
  lat: number = 52.488328;
  lng: number = 8.717017;
  country!: string;
  constructor(public dialog: MatDialog) { }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(CountryDialogComponent, {
      width: '250px',
      data: {country: this.country},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.country = result;
    });
  }
}


