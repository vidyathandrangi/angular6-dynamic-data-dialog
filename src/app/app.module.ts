import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DialogtableserviceService } from './dialogtableservice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DialogTableComponent } from './dialog-table/dialog-table.component';
import { MatDialogModule, MatButtonModule, MatPaginatorModule, MatIconModule, MatSortModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    DialogTableComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [DialogtableserviceService],
  bootstrap: [AppComponent],
  entryComponents: [DialogTableComponent]
})
export class AppModule { }
