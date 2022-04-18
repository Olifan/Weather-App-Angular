import { Component, OnInit } from "@angular/core";
import { WeatherItem } from "./weather-item";
import { WeatherService } from "./weather.service";

@Component({
    selector: 'weather-list',
    templateUrl: './weather-list.component.html',
    styleUrls:  ['../app.component.css']
})

export class WeatherListComponent implements OnInit{
    weatherItems!: WeatherItem[];

    constructor(private _weatherService: WeatherService){}

    ngOnInit(): any {
        this.weatherItems = this._weatherService.getWeatherItems();
    }
}