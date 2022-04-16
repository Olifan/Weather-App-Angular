import { Component, OnInit } from "@angular/core";
import { WeatherItem } from "./weather-item";
import { WeatherService } from "./weather.service";

@Component({
    selector: 'weather-list',
    template: `
        <div class="content">
            <weather-item *ngFor="let weatherItem of weatherItems" [item]="weatherItem"></weather-item>
        </div>
    `
})

export class WeatherListComponent implements OnInit{
    weatherItems!: WeatherItem[];

    constructor(private _weatherService: WeatherService){}

    ngOnInit(): any {
        this.weatherItems = this._weatherService.getWeatherItems();
    }
}