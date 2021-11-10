import React, { FC, useEffect, useState } from 'react';
import { Layout, Row, Spin } from 'antd';
import { SelectedGraph } from './selectedGraph/SelectedGraph';
import {
  LocationCoord,
  SelectedLocationWeatherTypes,
} from '../types/locationDataType';
import { SelectedLocationWeather } from './selectedLocationWeather/SelectedLocationWeather';
import { fetchByСoord } from '../api/selectLocation';

const { Content } = Layout;

export interface MainProps {
  locationCoord: LocationCoord;
  locationName: string;
  error?: string;
  setError: (message: string) => void;
}

export const Main: FC<MainProps> = ({
  locationName,
  locationCoord,
  error,
  setError,
}) => {
  const [locationData, setLocationData] =
    useState<SelectedLocationWeatherTypes>();

  const getLocationData = async () => {
    const response = await fetchByСoord(locationCoord);
    const data = await response.json();

    if (data.message) {
      return setError(data.message);
    }
    setError('');

    setLocationData({
      current: {
        timezone: data?.timezone,
        temp: Math.round(data?.current.temp),
        feelsLike: Math.round(data?.current.feels_like),
        humidity: data?.current.humidity,
        weather: data?.current.weather[0].main,
        icon: data?.current.weather[0].icon,
        wind: data?.current.wind_speed,
      },
      daily: data?.daily.slice(1).map((day: any) => {
        return {
          date: day?.dt * 1000,
          day: Math.round(day?.temp.day),
          night: Math.round(day?.temp.night),
          icon: day?.weather[0].icon,
          weather: day?.weather[0].main,
        };
      }),
    });
  };

  useEffect(() => {
    getLocationData();
  }, [locationCoord]);

  return (
    <Content className="content">
      {error ? (
        <h1>{error}</h1>
      ) : (
        <Row className="currentWeather">
          <SelectedLocationWeather
            locationData={locationData}
            locationName={locationName}
          />
          <SelectedGraph />
        </Row>
      )}
    </Content>
  );
};
