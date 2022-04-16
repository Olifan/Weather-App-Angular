import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { WeatherItem } from "./weather-item";
import { WeatherService } from "./weather.service";

@Component({
    selector:'weather-search',
    template: `
        <form #f="ngForm" (ngSubmit)="onSubmit(f)"  id="searchForm">
            <input ngModel type="text" name="search" placeholder="Search for a city" autofocus="" required>
            <button type="submit">SUBMIT</button>
            <span class="message"></span>
        </form>
    `
})

export class WeatherSearchComponent {

    constructor(private _weatherService: WeatherService){}

    onSubmit(f: NgForm){
        console.log(f.value);
        this._weatherService.searchWeatherData(f.value)
        .subscribe(
            data => {
                const weatherItem = new WeatherItem(
                    data.name, 
                    data.sys.country, 
                    data.main.temp, 
                    'icon', 
                    data.weather[0].description);

                    this._weatherService.addWeatherItem(weatherItem);
            }
        )
    }
}