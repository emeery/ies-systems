import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculate-date',
  templateUrl: './calculate-date.component.html',
  styleUrls: ['./calculate-date.component.scss']
})
export class CalculateDateComponent implements OnInit {
  form: FormGroup
  date!: Date
  selectedUnity!: string
  message!: string
  select = [
    {value: 'dia', viewValue: 'Dias'},
    {value: 'mes', viewValue: 'Meses'},
    {value: 'año', viewValue: 'Años'},
  ];
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({unity: ['',Validators.required]})
  }

  ngOnInit(): void {}

  setDate(date: Date) { this.date = date }

  addDate() {
    if(this.selectedUnity == 'dia') {
      this.addDays(this.date, Number(this.form.value.unity))
    }
    if(this.selectedUnity == 'mes') {
      this.addMonths(this.date, Number(this.form.value.unity))
    }
    if(this.selectedUnity == 'año') {
      this.addYears(this.date, Number(this.form.value.unity))
    }
  }

  addDays(date: Date, days: number) {
    let newDate = new Date(date)
    newDate.setDate(newDate.getDate() + days)
    this.date = newDate
  }

  addMonths(date: Date, months: number) {
    let newDate = new Date(date)
    newDate.setMonth(newDate.getMonth() + months)
    this.date = newDate
  }

  addYears(date: Date, years: number) {
    let newDate = new Date(date)
    newDate.setFullYear(newDate.getFullYear() + years)
    this.date = newDate
  }

  onUnitySelection(val:string) {
    if(this.selectedUnity == 'dia') this.message = 'Cuantos dias sumarás'
    if(this.selectedUnity == 'mes') this.message = 'Cuantos meses sumarás'
    if(this.selectedUnity == 'año') this.message = 'Cuantos años sumarás'
  }

}
