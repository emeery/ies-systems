import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UniversalValidators } from 'ngx-validators';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup
  formBooks!:FormArray
  disabled = true
  select = [
    {value: 'soltero', viewValue: 'soltero'},
    {value: 'casado', viewValue: 'casado'},
    {value: 'divorciado', viewValue: 'divorciado'},
  ];
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombres: ['',[Validators.required, Validators.pattern(/^\S*$/)]],
      apellidos: ['',[Validators.required, Validators.pattern(/^\S*$/)]],
      fumas: ['',Validators.required],
      actualmentePracticasLectura: [true,Validators.required],
      librosLeidosUltimosTresMeses: this.formBuilder.array([this.setBooksArray()]),
      estadoCivil: ['']
    })
  }

  ngOnInit(): void {
    this.checkLecture()
  }

  get f() {
    return this.form.controls;
  }

  generateUniqueId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  checkLecture() {
    this.form.controls['actualmentePracticasLectura'].valueChanges.subscribe(check => {
      if(check) {
        this.disabled = true
        this.form.addControl('librosLeidosUltimosTresMeses', new FormArray([this.setBooksArray()]))
      } else {
        this.disabled = false
        this.form.removeControl('librosLeidosUltimosTresMeses')
      }
    });
  }

  addBook() {
    this.fa.push(this.setBooksArray());
  }

  setBooksArray() {
    return this.formBuilder.group({
      book: this.formBuilder.control('Dorian Grey', Validators.required),
      id: this.generateUniqueId()
    });
  }



  get fa() { return this.form.get('librosLeidosUltimosTresMeses') as FormArray; }

  send() {
    console.log(this.form.value)
  }
}
