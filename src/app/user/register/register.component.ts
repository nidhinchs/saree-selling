import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    email: new FormControl('nidhi', Validators.required),
    password: new FormControl('123', Validators.required)
  });

  collectData() {
    console.warn(this.registerForm?.value);
  }

  get email() {
    return this.registerForm.get('email')!;
  }

  get password() {
    return this.registerForm.get('password')!;
  }


  /*login(value: any) {
    console.warn(value);
    this.color = 'red';
    alert("Login success")

  }*/


  /*name = "Nidhi"
  disabledBox = true;

  enableBoth() {
    this.disabledBox = false;
  }


  show = false;

  showWithString = "blue";
  color = "red";

  data = ['nidhi', 'nikunj', 'madhava'];

  data1 = [
    {
      name: 'nidhi',
      age: 26
    }, {
      name: 'nikunj',
      age: 27
    }, {
      name: 'vimal',
      age: 32
    }, {
      name: 'hitva',
      age: 5
    }, {
      name: 'dimpal',
      age: 33
    },
  ]*/


}
