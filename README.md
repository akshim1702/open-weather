# Openweather

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## https://api.openweathermap.org/geo/1.0/direct?q=Delhi,India&limit=1&appid=2e24cb6e1a47ce6c79c7689f3a754bf6



Location	    Delhi, India
Weather	        Haze
Temperature	    298.21 K
Feels Like	    297.76 K
Min Temperature	298.21 K
Max Temperature	298.21 K
Pressure	    1009 hPa
Humidity	    38%
Visibility	    2200 m
Wind Speed	    2.06 m/s
Wind Direction	240°
Cloudiness	    40%
Sunrise	        [Sunrise time]
Sunset	        [Sunset time]


## https://openweathermap.org/weather-conditions



{
    "coord": {
        "lon": 77.2219,
        "lat": 28.6517
    },
    "weather": [
        {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 309.9,
        "feels_like": 307.77,
        "temp_min": 309.9,
        "temp_max": 310.21,
        "pressure": 1005,
        "humidity": 17
    },
    "visibility": 5000,
    "wind": {
        "speed": 4.12,
        "deg": 310
    },
    "clouds": {
        "all": 75
    },
    "dt": 1713443550,
    "sys": {
        "type": 2,
        "id": 145989,
        "country": "IN",
        "sunrise": 1713399730,
        "sunset": 1713446295
    },
    "timezone": 19800,
    "id": 1273294,
    "name": "Delhi",
    "cod": 200
}



As discussed over the call, I am sharing you the Assignment Test kindly check and revert asap.


You need to create a project using Open Weather map and create a UI where user must select country and state. Once selected then click on submit to get the current weather data from API and display it on webpage. UI must contain table view, card view and modals.

1. In table you need to show all the weather information coming from API.
2. In card view you must show the image as per weather like sunny, rainy etc.
3. In modal you need to print the beautified JSON data from the API and display it so the user can copy paste it by clicking on the copy icon present on the modal.

The rest is up to him how you wants to represent the UI.





Types of weather


Snowy
wind
cloudy
rainy
thunderstorm
tornado
cold wave
atmospheric pressure
cloudiness
humidity
lightning
percipitation
cyclone
drought
frost
heat wave
sleet
sunny
hot



thunderstorm
Drizzle
Rain
Snow
Mist
Smoke
Haze
Dust
Fog
Sand
Dust
Ash
Squall
Tornado
Clear
Clouds



