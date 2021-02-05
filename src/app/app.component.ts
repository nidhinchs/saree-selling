import {Component} from '@angular/core';
import {GlobalConstants} from "./common/global-constants";

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
  type: 'success',
  message: 'This is an success alert',
}, {
  type: 'info',
  message: 'This is an info alert',
}, {
  type: 'warning',
  message: 'This is a warning alert',
}, {
  type: 'danger',
  message: 'This is a danger alert',
}, {
  type: 'primary',
  message: 'This is a primary alert',
}, {
  type: 'secondary',
  message: 'This is a secondary alert',
}, {
  type: 'light',
  message: 'This is a light alert',
}, {
  type: 'dark',
  message: 'This is a dark alert',
}
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bg_color = "#444444";
  text_color = "white";
  title = GlobalConstants.siteTitle;
  alerts: Alert[] = Array();
  appName = 'invoiceDemo';
  name = "Nidhi";

  constructor() {
    this.reset();
  }

  getEditCustomer(data: String) {

    console.warn(data);
  }


  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

  getName() {
    return this.name;
  }

  obj = {
    name: "Nidhi",
    age: 26
  }

  arr = ['Nidhi', 'Nukunj', 'Madhav']

  a = 100;
  b = 230;

  siteUrl = window.location.href;
}





