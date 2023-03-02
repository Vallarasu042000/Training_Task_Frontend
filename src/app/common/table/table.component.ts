import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns = ['id', 'empName', 'age', 'dept'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
export interface Element {
  id: number;
  empName: string;
  age: number;
  dept: string;
}

const ELEMENT_DATA: Element[] = [
  {id: 1, empName: 'Hydrogen', age: 20, dept: 'IT'},
  {id: 2, empName: 'Helium', age: 26, dept: 'CSE'},
  {id: 3, empName: 'Lithium', age: 41, dept: 'IT'},
  {id: 4, empName: 'Beryllium', age: 22, dept: 'BCA'},
  {id: 5, empName: 'Boron', age: 11, dept: 'ECE'},
  {id: 6, empName: 'Carbon', age: 27, dept: 'CSE'},
  {id: 7, empName: 'Nitrogen', age: 67, dept: 'ECE'},
  {id: 8, empName: 'Oxygen', age: 14, dept: 'IT'},
  {id: 9, empName: 'Fluorine', age: 84, dept: 'MECH'},
  {id: 10, empName: 'Neon', age: 27, dept: 'ECE'},
  // {id: 11, empName: 'Sodium', age: 22, dept: 'EEE'},
  // {id: 12, empName: 'Magnesium', age: 25, dept: 'IT'},
  // {id: 13, empName: 'Aluminum', age: 25, dept: 'MECH'},
  // {id: 14, empName: 'Silicon', age: 85, dept: 'ECE'},
  // {id: 15, empName: 'Phosphorus', age: 38, dept: 'EEE'},
  // {id: 16, empName: 'Sulfur', age: 65, dept: 'EEE'},
  // {id: 17, empName: 'Chlorine', age: 53, dept: 'MECH'},
  // {id: 18, empName: 'Argon', age: 38, dept: 'ECE'},
  // {id: 19, empName: 'Potassium', age: 33, dept: 'EEE'},
  // {id: 20, empName: 'Calcium', age: 48, dept: 'It'},
];
