import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
  country: string;
 
}


@Component({
  selector: 'app-country-dialog',
  templateUrl: './country-dialog.component.html',
  styleUrls: ['./country-dialog.component.scss']
})
export class CountryDialogComponent  {

  constructor(
    public dialogRef: MatDialogRef<CountryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }

}
