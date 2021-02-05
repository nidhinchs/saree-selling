import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalConstants} from './common/global-constants';

@Injectable({
  providedIn: 'root'
})

export class CustomersDataService {

  constructor(private http: HttpClient) {

  }

  getData() {

    return {
      "status": "success",
      "code": "200",
      "result": [
        {
          "cust_id": 1,
          "cust_name": "111",
          "cust_phone": "9173495120",
          "cust_email": "nidhi",
          "cust_address": "jghisljhg",
          "cust_token": null,
          "is_delete": null,
          "is_active": null,
          "created_by": null,
          "created_date": "2021-01-28 16:07:02",
          "modified_by": null,
          "modified_date": "2021-01-28 16:07:02",
          "ip_address": null
        },
        {
          "cust_id": 3,
          "cust_name": "nidhi",
          "cust_phone": "7303555512",
          "cust_email": "vidjanidhi564@gmail.com",
          "cust_address": "",
          "cust_token": null,
          "is_delete": null,
          "is_active": null,
          "created_by": null,
          "created_date": "2021-01-28 17:06:19",
          "modified_by": null,
          "modified_date": "2021-01-28 17:06:19",
          "ip_address": null
        },
        {
          "cust_id": 5,
          "cust_name": "nidhi",
          "cust_phone": "7303555513",
          "cust_email": "vidjanidhi564@gmail.com",
          "cust_address": null,
          "cust_token": null,
          "is_delete": null,
          "is_active": null,
          "created_by": null,
          "created_date": "2021-01-28 17:08:14",
          "modified_by": null,
          "modified_date": "2021-01-28 17:08:14",
          "ip_address": null
        },
        {
          "cust_id": 16,
          "cust_name": "nidhi",
          "cust_phone": "73035555178",
          "cust_email": "vidjanidhi564@gmail.com",
          "cust_address": null,
          "cust_token": null,
          "is_delete": null,
          "is_active": null,
          "created_by": null,
          "created_date": "2021-01-28 18:46:35",
          "modified_by": null,
          "modified_date": "2021-01-28 18:46:35",
          "ip_address": null
        },
        {
          "cust_id": 19,
          "cust_name": "nidhi",
          "cust_phone": "7303555514",
          "cust_email": "vidjanidhi564@gmail.com",
          "cust_address": null,
          "cust_token": null,
          "is_delete": null,
          "is_active": null,
          "created_by": null,
          "created_date": "2021-01-28 18:58:35",
          "modified_by": null,
          "modified_date": "2021-01-28 18:58:35",
          "ip_address": null
        },
        {
          "cust_id": 22,
          "cust_name": "nidhi",
          "cust_phone": "7303555515",
          "cust_email": "vidjanidhi564@gmail.com",
          "cust_address": null,
          "cust_token": null,
          "is_delete": null,
          "is_active": null,
          "created_by": null,
          "created_date": "2021-01-28 18:59:35",
          "modified_by": null,
          "modified_date": "2021-01-28 18:59:35",
          "ip_address": null
        },
        {
          "cust_id": 27,
          "cust_name": "nidhi",
          "cust_phone": "7303555518",
          "cust_email": "vidjanidhi564@gmail.com",
          "cust_address": null,
          "cust_token": null,
          "is_delete": null,
          "is_active": null,
          "created_by": null,
          "created_date": "2021-01-28 19:06:32",
          "modified_by": null,
          "modified_date": "2021-01-28 19:06:32",
          "ip_address": null
        },
        {
          "cust_id": 34,
          "cust_name": "nidhi",
          "cust_phone": "730",
          "cust_email": "vidjanidhi564@gmail.com",
          "cust_address": null,
          "cust_token": null,
          "is_delete": null,
          "is_active": null,
          "created_by": null,
          "created_date": "2021-01-28 19:16:32",
          "modified_by": null,
          "modified_date": "2021-01-28 19:16:32",
          "ip_address": null
        }
      ]
    }
  }

  getCustomers() {
    let url: string = GlobalConstants.url_get_customers;
    return this.http.get(url);
  }

  getDashboard() {
    let url: string = GlobalConstants.url_get_dashboard;
    return this.http.get(url);
  }

  getProducts() {
    let url: string = GlobalConstants.url_get_products;
    return this.http.get(url);
  }

  verifyOtp(data) {
    let url: string = GlobalConstants.url_verify_otp ;
    return this.http.post(url,data);
  }

  saveCustomer(data) {
    let url: string = GlobalConstants.url_add_customer;
    return this.http.post(url, data);
  }

  sendOtp(data) {
    let url: string = GlobalConstants.url_send_otp;
    return this.http.post(url, data);
  }

  saveProducts(data) {
    let url: string = GlobalConstants.url_insert_products;
    console.log(url);
    return this.http.post(url, data);
  }
}
