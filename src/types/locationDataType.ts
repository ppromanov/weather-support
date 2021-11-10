export interface LocationCity {
  name: string;
  coord: LocationCoord;
}

export interface LocationCoord {
  lat: number;
  lon: number;
}

export interface Weather {
  timezone: string;
  temp: number;
  feelsLike: number;
  humidity: number;
  weather: string;
  icon: string;
  wind: number;
}

export interface forecastWeather {
  date: string;
  day: number;
  night: number;
  weather: string;
  icon: string;
}

export interface SelectedLocationWeatherTypes {
  current: Weather;
  daily: forecastWeather[];
}
