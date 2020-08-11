import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'auth-page',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {}

}
