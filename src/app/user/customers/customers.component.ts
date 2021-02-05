import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CustomersDataService} from "../../customers-data.service";
import {GlobalConstants} from "../../common/global-constants";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  data:any;
  dtOptions: any = {};
  message = "error in getting data"
  action = "reload"

  @Input() title: String = "";
  @Output() sendEditCustomer: EventEmitter<String> = new EventEmitter()

  constructor(private _snackBar: MatSnackBar, private customers: CustomersDataService) {
    this.customers.getCustomers().subscribe(
      data => {
        this.data = data;
        setTimeout(()=>{
          $('#datatable').DataTable( {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true,
            lengthMenu : [5, 10, 25],
            order:[[1,"desc"]]
          } );
        }, 1);
        //this.ngOnInit();
        console.log("data :" + data);
        console.log(data);
        if (this.data.code == GlobalConstants.ERROR) {
          this._snackBar.open("Error : " + this.data.error, "reload", {
            duration: 2000,
          });
        } else if (this.data.code == GlobalConstants.EMPTY) {
          this._snackBar.open("No Data Available", "", {
            duration: 2000,
          });
        }
      },
      error => {
        console.log("error:" + error);
        this._snackBar.open(this.message, this.action, {
          duration: 2000,
        });
        console.error(error)
      });
  }

 ngOnInit(): void {

   /* this.dtOptions = {
     pagingType: 'full_numbers',
     pageLength: 5,
     lengthMenu: [5, 10, 25,50],
     processing: true
   }*/
 }

  sendEditCustomerEvent(id: String) {
    this.sendEditCustomer.emit(id);
  }

}
