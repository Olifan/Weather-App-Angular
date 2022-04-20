import { Component, EventEmitter, Input, Output } from "@angular/core";
import { WeatherItem } from "./weather-item";
import { SpinnerComponent } from "./spinner.component";
import { WeatherSearchComponent } from "./weather-search.component";
import { Subject } from "rxjs";

@Component({
    selector: 'weather-item',
    templateUrl: './weather-item.component.html',
    styleUrls: ['../app.component.css']
})

export class WeatherItemComponent{

   @Input('item')
    weatherItem!: WeatherItem;

    showSpinner: boolean = false;

}