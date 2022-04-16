export class WeatherItem{

    constructor(
        public cityName: string, 
        public country: string, 
        public temperature: number, 
        public icon: string, 
        public description: string){}
}