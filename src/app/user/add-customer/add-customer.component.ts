import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomersDataService} from "../../customers-data.service";
import {GlobalConstants} from "../../common/global-constants";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  error: string = "";
  success: string = "";
  data: any;
  message = "error in add data"
  action = "reload"

  constructor(private customersDataService: CustomersDataService, private _snackBar: MatSnackBar, private router: Router) {
  }

  addCustomer = new FormGroup({
    cust_name: new FormControl('',Validators.required),
    cust_phone: new FormControl('',Validators.required),
    cust_email: new FormControl(''),
    cust_address: new FormControl('')
  })

  collectCustomer() {
    console.warn(this.addCustomer.value);
    this.customersDataService.saveCustomer(this.addCustomer.value).subscribe(
      (data) => {
        this.data = data;
        console.log("data :" + data);
        console.log(data);
        if (this.data.code == GlobalConstants.ERROR) {

          // this.showSnackBar("Error : " + this.data.error)

          this.error = this.data.error;
          this.success = "";

        } else if (this.data.code == GlobalConstants.SUCCESS) {
          //this.showSnackBar("Customer Added Successfully")

          this.error = "";
          this.success = "Customer Added Successfully";
          this.reset()
          setTimeout(() => {
            this.router.navigateByUrl('user/'+GlobalConstants.customer);
          }, 2000)
        }
      },
      error => {
        console.log("error:" + error);
        this.error = "Some Error Occurred";
        this.success = "";
        //this.showSnackBar(this.message);

      });

  }

  showSnackBar(s: string) {
    this._snackBar.open(s, "", {
      duration: 4000,
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
    });
  }

  reset() {
    this.addCustomer.reset();
  }

  ngOnInit(): void {
  }

}
