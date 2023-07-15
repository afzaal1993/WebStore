import { Component, Input, OnInit } from '@angular/core';
import { currencyCode } from 'src/app/constants';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;

  constructor() {}

  currCode = currencyCode;

  ngOnInit(): void {}
}
