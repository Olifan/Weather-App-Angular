import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { WeatherItem } from "./weather-item";
import { WeatherService } from "./weather.service";

@Component({
    selector:'weather-search',
    templateUrl: './weather-search.component.html',
    styleUrls: ['../app.component.css']
})

export class WeatherSearchComponent {

    message: string = '';
    input: string = '';

    cities: string[] = [];

    constructor(private _weatherService: WeatherService){}

    addCity(){
        this.cities.push(this.input.toLowerCase());
        console.log(this.cities);
    }

    onSubmit(f: NgForm){

        if( !this.input || this.input === ''){
            console.log('Sraka');
            this.message = 'Please search for a valid city 😩';
        } else if(this.cities.includes(this.input.toLowerCase())){
            this.message = `You already know the weather for ${this.input}
            ...otherwise be more specific by providing the country code as well 😉`
        } 
        else {
            console.log(this.input);
            this.addCity();
        
            this._weatherService.searchWeatherData(this.input)
            .subscribe(
                data => {
                    const weatherItem = new WeatherItem(
                        data.name, 
                        data.sys.country, 
                        Math.round(data.main.temp), 
                        `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0]["icon"]}.svg`, 
                        data.weather[0].description);

                        this.message = ''
                        this._weatherService.addWeatherItem(weatherItem);

                }
            )
        }
        
        f.reset();
        
    }
}