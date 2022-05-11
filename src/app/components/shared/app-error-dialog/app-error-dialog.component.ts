import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-app-error-dialog',
  templateUrl: './app-error-dialog.component.html',
  styleUrls: ['./app-error-dialog.component.scss']
})
export class AppErrorDialogComponent  {
    message = 'ocurrió un error';
    constructor(@Inject(MAT_DIALOG_DATA) public data: {message: string} ) {
      if(!this.data) {console.log('no hay datos')}
    }

}

