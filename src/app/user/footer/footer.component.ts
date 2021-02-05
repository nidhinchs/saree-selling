import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  bg_color = "green";
  text_color = "white";


  constructor() { }

  ngOnInit(): void {
  }

}
