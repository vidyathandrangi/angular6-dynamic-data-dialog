import { DialogtableserviceService } from './dialogtableservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular6-dynamic-data-dialog';
  data = [
    { SNo: '1', Name: 'Sname', Department: 'Dep1', Rank: '34' },
    { SNo: '2', Name: 'Kname', Department: 'Dep2', Rank: '12' },
    { SNo: '3', Name: 'Iname', Department: 'Dep1', Rank: '54' },
    { SNo: '4', Name: 'Sname', Department: 'Dep3', Rank: '84' },
    { SNo: '5', Name: 'Jname', Department: 'Dep4', Rank: '19' },
    { SNo: '6', Name: 'Aname', Department: 'Dep3', Rank: '05' },
    { SNo: '7', Name: 'Uname', Department: 'Dep4', Rank: '33' },
    { SNo: '8', Name: 'Rname', Department: 'Dep2', Rank: '23' },
    { SNo: '9', Name: 'Tname', Department: 'Dep1', Rank: '72' },
    { SNo: '10', Name: 'Gname', Department: 'Dep4', Rank: '81' }
  ];

  //columns = ['label', 'value'];
  constructor(private dialog: DialogtableserviceService) { }

  launchDialog() {
    let returnval = this.dialog.showDialog(this.data);
  }


}
