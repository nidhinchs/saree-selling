import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {CustomersDataService} from "../../customers-data.service";
import {GlobalConstants} from "../../common/global-constants";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  user = "home";
  sales = " 0"
  customers = "0"
  products = "0"
  invoices = "0"

  constructor(private _snackBar: MatSnackBar, private service: CustomersDataService) {
    this.service.getDashboard().subscribe(
      data => {
        this.data = data;

        console.log("data :" + data);
        console.log(data);
        if (this.data.code == GlobalConstants.ERROR) {
          this.showSnackBar("Error : " + this.data.error);

        } else if (this.data.code == GlobalConstants.EMPTY) {
          this.showSnackBar("No Data Available");

        } else {
          this.products = this.data.result[0].products;
          this.customers = this.data.result[0].customers;
          this.sales = this.data.result[0].total_sell;
          this.invoices = this.data.result[0].invoices;
        }
      },
      error => {
        console.log("error:" + error);
        this.showSnackBar("Some Error Occured");

        console.error(error)
      });
  }

  ngOnInit(): void {
  }

  showSnackBar(s: string) {
    this._snackBar.open(s, "", {
      duration: 4000,
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
    });
  }


}
