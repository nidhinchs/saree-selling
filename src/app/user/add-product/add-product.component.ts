import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import * as XLSX from 'xlsx';
import {CustomersDataService} from "../../customers-data.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {GlobalConstants} from "../../common/global-constants";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  data: any = []
  result: any = []
  displaySpinner: boolean=false;

  constructor(private service: CustomersDataService,private _snackBar: MatSnackBar, private router: Router) {
  }

  ngOnInit(): void {
  }

  addProduct = new FormGroup({
    file: new FormControl('')
  })

  onFileChange(ev) {
    let workBook: any = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, {type: 'binary'});
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];

        initial[name] = XLSX.utils.sheet_to_json(sheet);
        //custom code
        this.data = initial[name]
        //custom code over
        return initial;
      }, {});
      const dataString = JSON.stringify(jsonData);
      let name = workBook.SheetNames[0].toString;
      let obj = JSON.parse(dataString)

      //document.getElementById('output').innerHTML = dataString.slice(0, 300).concat("...");
      //this.setDownload(dataString);
    }
    reader.readAsBinaryString(file);
  }

  uploadExcel() {
    this.displaySpinner = true;
    console.log("service");
    this.service.saveProducts(this.data).subscribe(
      data => {
        this.result=data;
        console.log(data);
        this.displaySpinner = false;
        this.showSnackBar(this.result.message)
        this.router.navigateByUrl('user/'+GlobalConstants.product);

      }, error => {
        this.result = error;
        console.log(error);
        this.displaySpinner = false;
        this.showSnackBar(this.result.message)
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
