import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map} from 'rxjs/operators';
import { WEATHER_ITEMS } from "./weather.data";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { WeatherItem } from "./weather-item";


@Injectable()
export class WeatherService{

    constructor(private _http: HttpClient){}

    getWeatherItems(){
        return WEATHER_ITEMS;
    }

    addWeatherItem(weatherItem: WeatherItem){
        WEATHER_ITEMS.push(weatherItem);
    }

    searchWeatherData(cityName: string): Observable<any> {
        
        return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=' + cityName 
        + '&appid=4d8fb5b93d4af21d66a2948710284366&units=metric')
        .pipe(
            map(response => console.log(response))
        );
    }
}