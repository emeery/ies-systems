import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppInputDialogComponent } from '../../shared/app-input-dialog/app-input-dialog.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  name!: string
  constructor(
    private dlg: MatDialog
  ) { }

  ngOnInit(): void {}

  openInputDialog() {
    this.dlg.open(AppInputDialogComponent,{disableClose: true})
    .afterClosed().subscribe(res => {
      this.name = res.data
    })
  }
}
