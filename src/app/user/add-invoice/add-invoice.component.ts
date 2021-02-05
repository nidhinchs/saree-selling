import {Component, OnInit} from '@angular/core';
import {GlobalConstants} from "../../common/global-constants";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CustomersDataService} from "../../customers-data.service";

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {
  data: any;

  invoice = {
    id: sessionStorage.getItem(GlobalConstants.id),
    phone: sessionStorage.getItem(GlobalConstants.phone),
    address: sessionStorage.getItem(GlobalConstants.address),
    company_name: sessionStorage.getItem(GlobalConstants.company_name)
  }

  invoiceGroup = new FormGroup(
    {
      cust_name: new FormControl('',Validators.required),
      cust_phone: new FormControl('',Validators.required),
    }
  )

  myControl = new FormControl();
  customer_phone_options: string[] =[];
  customer_name_options: string[] =[];
  filteredOptions!: Observable<string[]>;

  constructor(private _snackBar: MatSnackBar, private customers: CustomersDataService) {
    this.customers.getCustomers().subscribe(
      data => {
        this.data = data;
        this.customer_phone_options = this.data.result.map(customer => customer.cust_phone)
        this.customer_name_options = this.data.result.map(customer => customer.cust_name)

        //this.ngOnInit();
        console.log("data :" + data);
        console.log(data);
        if (this.data.code == GlobalConstants.ERROR) {
          this.showSnackBar("Error : " + this.data.error);
        } else if (this.data.code == GlobalConstants.EMPTY) {
          this.showSnackBar("No Data Available");
        }
      },
      error => {
        console.log("error:" + error);
        this.showSnackBar("Some Error Occured");
        console.error(error)
      });
  }

  showSnackBar(s: string) {
    this._snackBar.open(s, "", {
      duration: 4000,
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
    });
  }




  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.customer_phone_options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }


  //table of items

   fieldArray: Array<any> = [];
   newAttribute: any = {};

  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  collectInvoice(){
    console.log(this.invoiceGroup.value)
  }

}
