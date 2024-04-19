export interface States {
  countryId: number;
  name: string;
  id: number;
  isoCode:string;
  latitude:string | null | undefined;
  longitude:string | null | undefined;
}

export interface Countries {
  id: number;
  name: string;
  countryCode: string;
}

export interface Cordinate {
  latitude: number;
  longitude: number;
}
