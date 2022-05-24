import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
export interface PeriodicElement {
  position:number,
  country: string;
  current_name: string;
  number:number;
  spud_date:string;
  compl_date:string;
  class:string;
  tech_status:string;
  content:string;
  participant:string;
  num_of_periods:string;
  resource_type:string;
  well_id:number;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position:1,
    country: 'Canada',
    current_name: 'Saruk',
    number:5252476,
    spud_date:'2012-10-10',
    compl_date:'2013-11-19',
    class:'High',
    tech_status:'active',
    content:'summa',
    participant:'Gooper',
    num_of_periods:'5',
    resource_type:'tain',
    well_id:637275273},
    {position:1,
      country: 'Canada',
      current_name: 'Saruk',
      number:5252476,
      spud_date:'2012-10-10',
      compl_date:'2013-11-19',
      class:'High',
      tech_status:'active',
      content:'summa',
      participant:'Gooper',
      num_of_periods:'5',
      resource_type:'tain',
      well_id:637275273},
      {position:1,
        country: 'Canada',
        current_name: 'Saruk',
        number:5252476,
        spud_date:'2012-10-10',
        compl_date:'2013-11-19',
        class:'High',
        tech_status:'active',
        content:'summa',
        participant:'Gooper',
        num_of_periods:'5',
        resource_type:'tain',
        well_id:637275273},  {position:1,
          country: 'Canada',
          current_name: 'Saruk',
          number:5252476,
          spud_date:'2012-10-10',
          compl_date:'2013-11-19',
          class:'High',
          tech_status:'active',
          content:'summa',
          participant:'Gooper',
          num_of_periods:'5',
          resource_type:'tain',
          well_id:637275273},  {position:1,
            country: 'Canada',
            current_name: 'Saruk',
            number:5252476,
            spud_date:'2012-10-10',
            compl_date:'2013-11-19',
            class:'High',
            tech_status:'active',
            content:'summa',
            participant:'Gooper',
            num_of_periods:'5',
            resource_type:'tain',
            well_id:637275273},  {position:1,
              country: 'Canada',
              current_name: 'Saruk',
              number:5252476,
              spud_date:'2012-10-10',
              compl_date:'2013-11-19',
              class:'High',
              tech_status:'active',
              content:'summa',
              participant:'Gooper',
              num_of_periods:'5',
              resource_type:'tain',
              well_id:637275273},

];

/**
 * @title Basic use of `<table mat-table>`
 */
 @Component({
  selector: 'app-wellperiod',
  templateUrl: './wellperiod.component.html',
  styleUrls: ['./wellperiod.component.scss']
})

export class WellperiodComponent implements AfterViewInit {


  lat: number = 51.678418;
  lng: number = 7.809007;


  displayedColumns: string[] = ['position',
    'country',
    'current_name',
    'number',
    'spud_date',
    'compl_date',
    'class',
    'tech_status',
    'content',
    'participant',
    'num_of_periods',
    'resource_type',
    'well_id'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

