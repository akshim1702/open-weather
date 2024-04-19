import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Country, State } from 'country-state-city';
import { ApiService } from 'src/app/services/api.service';
import { UtilsService } from 'src/app/services/utils.service';
import { Cordinate, Countries, States } from 'src/types/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public loading = false;

  states: States[] = [];
  countries: Countries[] = [];
  cordinates: Cordinate = { latitude: 0, longitude: 0 };

  form: FormGroup = this.fb.group({
    country: ['', Validators.required],
    state: [{ value: '', disabled: true },this.getStateValidator()],
  });

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router,
    public utils: UtilsService
  ) {
    this.getCountryDetails();
  }



  ngOnInit() {
    this.form?.get('country')?.valueChanges.subscribe((countryId) => {
      if (countryId) {
        this.getStatesByCountry(countryId);
      } else {
        this.states = [];
        this.form?.get('state')?.disable();
      }
    });
  }


  getStateValidator() {
    return (control:any) => {
      if (this.states.length > 0) {
        return Validators.required(control);
      } else {
        return null;
      }
    };
  }


  onSubmit() {
    if (this.form.valid) {
      const selectedCountry = this.countries.find(
        (country) => country.id == this.form.value['country']
      );
      if (selectedCountry) {
        const selectedState = this.states.find(
          (state) => state.id == this.form.value['state']
        );

        if (
          selectedState &&
          selectedState.latitude &&
          selectedState.longitude
        ) {
          this.router.navigate(['/weather'], {
            queryParams: {
              lat: selectedState.latitude,
              lon: selectedState.longitude,
            },
          });
        } else {
          this.handleGeocode(selectedCountry);
        }
      }
    } else {
      console.log('Form is not valid!');
    }
  }

  getCountryDetails() {
    this.countries = Country.getAllCountries().map((country, index) => ({
      id: index + 1,
      name: country.name,
      countryCode: country.isoCode
    }));    
  }

  getStatesByCountry(countryId: number): void {
    const selectedCountry = this.countries.find(
      (country) => country.id == countryId
    );

    if (selectedCountry) {
      const countryData = State.getStatesOfCountry(selectedCountry.countryCode);
      if (countryData) {
        this.states = countryData.map((state, index) => ({
          id: index + 1,
          name: state.name,
          countryId,
          isoCode: state.isoCode,
          latitude: state.latitude,
          longitude: state.longitude,
        }));

        this.form?.get('state')?.enable();
      }
    } else {
      console.error('Country not found');
    }
  }

  handleGeocode(selectedCountry: any) {
    this.loading = true;
    this.api
      .getCordinatesData(this.form.value['state'], selectedCountry.name)
      .subscribe(
        (data) => {
          this.loading = false;
          this.cordinates = {
            latitude: data[0].lat,
            longitude: data[0].lon,
          };
          if (this.cordinates.latitude != 0 && this.cordinates.longitude != 0) {
            this.router.navigate(['/weather'], {
              queryParams: {
                lat: this.cordinates.latitude,
                lon: this.cordinates.longitude,
              },
            });
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
