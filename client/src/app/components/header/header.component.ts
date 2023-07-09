import { Component, OnInit } from '@angular/core';
import {currencyCode} from '../../constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor() {}

currCode = currencyCode;

  ngOnInit(): void {}
}
