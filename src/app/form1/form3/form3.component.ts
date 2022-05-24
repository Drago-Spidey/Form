import {LiveAnnouncer} from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

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
];

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss']
})
export class Form3Component implements AfterViewInit {

  
  displayedColumns: string[] = [
    'radioselect',
    'select',
    'position',
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
  selection = new SelectionModel<PeriodicElement>(false, []);
  clickedRows = new Set<PeriodicElement>();
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
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