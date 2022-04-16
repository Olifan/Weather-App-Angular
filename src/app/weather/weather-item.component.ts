import { Component, Input } from "@angular/core";
import { WeatherItem } from "./weather-item";

@Component({
    selector: 'weather-item',
    template: `
        <div class="cards">
            <div class="city">
                <span>{{weatherItem.cityName}}</span>
                <sup>{{weatherItem.country}}</sup>
            </div>
            <div class="temp">
                {{weatherItem.temperature}}<sup>°C</sup>
            </div>
            <div class="weather">
                <img class="icon" src={{weatherItem.icon}}>
                <span>{{weatherItem.description}}</span>
            </div>
        </div>
    `,
})

export class WeatherItemComponent{

   @Input('item')
    weatherItem!: WeatherItem;
    

}