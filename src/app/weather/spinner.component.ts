import { Component, Input, OnInit } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent implements OnInit {
  public icon = faSpinner;

  constructor() {}

  ngOnInit(): void {}

  @Input() size: number = 25;
  @Input() show: boolean = false;
}

