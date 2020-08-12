import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'main-page',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {}

}
