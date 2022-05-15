import { Component, OnInit } from '@angular/core';
import * as Aos from "aos";

@Component({
  selector: 'app-root-intro',
  templateUrl: './root-intro.component.html',
  styleUrls: ['./root-intro.component.scss']
})
export class RootIntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  Aos.init();
  }

}
