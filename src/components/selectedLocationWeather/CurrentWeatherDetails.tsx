import { Descriptions } from 'antd';
import React, { FC } from 'react';
import { Weather } from '../../types/locationDataType';

const { Item } = Descriptions;

export interface CurrentWeatherDetailsProps {
  locationData?: Weather;
}

export const CurrentWeatherDetails: FC<CurrentWeatherDetailsProps> = ({
  locationData,
}) => {
  return (
    <Descriptions bordered column={1} size="small">
      <Item label="Weather">{locationData?.weather}</Item>
      <Item label="Temperature">{locationData?.temp}℃</Item>
      <Item label="Feel like">{locationData?.feelsLike}℃</Item>
      <Item label="Wind">{locationData?.wind} m/sec</Item>
      <Item label="Humidity">{locationData?.humidity}%</Item>
    </Descriptions>
  );
};
