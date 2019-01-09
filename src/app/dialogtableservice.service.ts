import { DialogTableComponent } from './dialog-table/dialog-table.component';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Injectable({
  providedIn: 'root'
})

export class DialogtableserviceService {

  constructor(public dialog: MatDialog) { }

  showDialog(data: any[]) {

    let columns = Object.keys(data[0]);

    const dialogRef = this.dialog.open(DialogTableComponent, {
      width: '1050px',
      height: '500px',
      data: { data: data, columns: columns }
    });


  }
}
