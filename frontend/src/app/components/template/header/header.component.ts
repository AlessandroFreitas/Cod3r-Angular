import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerServive: HeaderService) { }

  ngOnInit(): void {
  }

  get title(): string{
    return this.headerServive.headerData.title
  }

  get icon(): string{
    return this.headerServive.headerData.icon
  }

  get routeUrl(): string{
    return this.headerServive.headerData.routeUrl
  }
}
