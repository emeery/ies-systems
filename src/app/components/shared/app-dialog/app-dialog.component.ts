import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-app-dialog',
  templateUrl: './app-dialog.component.html',
  styleUrls: ['./app-dialog.component.scss']
})
export class AppDialogComponent {
  mensaje = 'ocurrió un error';
  constructor(@Inject(MAT_DIALOG_DATA) public data: {message: string} ) {
    if(!this.data) {console.log('no hay datos')}
  }



}
