import {Component, ComponentFactoryResolver, OnInit, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  bg_color = "green";
  text_color = "white";

  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {
  }

  //lazy loading of component
  async loadHome() {
    this.viewContainerRef.clear()
    const { LoginComponent } = await import('../login/login.component')
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(LoginComponent)
    )
  }

  ngOnInit(): void {
  }

}
