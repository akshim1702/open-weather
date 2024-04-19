import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './components/weather/weather.component';
import { HomeComponent } from './components/home/home.component';
import { JsonModalComponent } from './components/json-modal/json-modal.component';
import { ThemePipePipe ,CapitalizeFirstPipe } from './pipes/theme-pipe.pipe';
import { NgxLoadingModule } from 'ngx-loading';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HomeComponent,
    JsonModalComponent,
    ThemePipePipe,
    CapitalizeFirstPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.5)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff',
      fullScreenBackdrop: false,
    }),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
