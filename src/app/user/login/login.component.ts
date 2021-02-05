import {Component, OnInit} from '@angular/core';
import {CustomersDataService} from "../../customers-data.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {GlobalConstants} from "../../common/global-constants";
import {Router} from "@angular/router";
import Global = WebAssembly.Global;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private customersDataService: CustomersDataService, private _snackBar: MatSnackBar, private router: Router) {
  }

  color = 'orange';
  err = true;
  data: any

  userData = {
    phone: "",
    otp: ""

  }

  ngOnInit(): void {
  }

  sendOtp(value: any) {
    console.warn(value);
    this.color = 'red';

    this.customersDataService.sendOtp(value).subscribe(
      (data) => {
        this.data = data;
        console.log("data :" + data);
        console.log(data);
        if (this.data.code == GlobalConstants.ERROR) {
          this.showSnackBar("Error : " + this.data.error)
        } else if (this.data.code == GlobalConstants.SUCCESS) {
          this.showSnackBar("Otp Sent")
        }
      },
      error => {
        this.showSnackBar(error.message);
      });
  }

  verifyOtp(value: any, phone: any) {
    console.warn(value);
    this.color = 'red';

    let otpVerify = {
      phone: phone,
      otp: value.otp
    }
    this.customersDataService.verifyOtp(otpVerify).subscribe(
      (data) => {
        this.data = data;
        console.log("data :" + data);
        console.log(data);
        if (this.data.code == GlobalConstants.ERROR) {
          this.showSnackBar("Error : " + this.data.message);
        } else if (this.data.code == GlobalConstants.SUCCESS) {
          this.showSnackBar("Otp Verified");
          sessionStorage.setItem(GlobalConstants.id, this.data.result.vendor_id);
          sessionStorage.setItem(GlobalConstants.phone, this.data.result.vendor_phone);
          sessionStorage.setItem(GlobalConstants.email, this.data.result.vendor_email);
          sessionStorage.setItem(GlobalConstants.address, this.data.result.vendor_address);
          sessionStorage.setItem(GlobalConstants.company_name, this.data.result.company_name);
          sessionStorage.setItem(GlobalConstants.company_logo, this.data.result.company_logo);
          sessionStorage.setItem(GlobalConstants.terms, this.data.result.terms);
          sessionStorage.setItem(GlobalConstants.signature, this.data.result.signature);
          this.router.navigateByUrl('user/'+GlobalConstants.home);
        }
      },
      error => {
        this.showSnackBar("Some Error Occurred");
      });
  }

  showSnackBar(s: string) {
    this._snackBar.open(s, "", {
      duration: 4000,
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
    });
  }


}
