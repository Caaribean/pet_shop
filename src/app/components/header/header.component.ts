import { Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isOrange: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isOrange = event.url === '/home' ? true : false;
      }
    });
  }
}
