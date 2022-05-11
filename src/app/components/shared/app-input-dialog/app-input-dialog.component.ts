import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-app-input-dialog',
  templateUrl: './app-input-dialog.component.html',
  styleUrls: ['./app-input-dialog.component.scss']
})
export class AppInputDialogComponent implements OnInit {
  form: FormGroup
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    private formBuilder: FormBuilder,
    private dlgRef: MatDialogRef<AppInputDialogComponent>
  ) {
    this.form = this.formBuilder.group({name: ['',Validators.required]})
  }

  ngOnInit(): void {
  }

  confirm() {
    console.log(this.form.value)
    this.dlgRef.close({data: this.form.value.name})
  }

}
