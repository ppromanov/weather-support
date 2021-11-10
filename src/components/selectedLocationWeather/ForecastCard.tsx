import { Card, Descriptions } from 'antd';
import React, { FC } from 'react';
import { apiImageUrl } from '../../constants/api';
import { forecastWeather } from '../../types/locationDataType';
import { days } from '../../constants/weekDays';
import weatherError from '../../assets/weatherError.png';

const { Item } = Descriptions;

interface ForecastCardProps {
  day: forecastWeather;
  isTomorrow?: boolean;
}

export const ForecastCard: FC<ForecastCardProps> = ({ day, isTomorrow }) => {
  const date = new Date(day.date);
  const weekday = date.getDay();

  return (
    <Card
      title={isTomorrow ? 'Tomorrow' : days[weekday]}
      className="forecastCard"
    >
      <Descriptions size="small" column={1}>
        <Item className="cardImageDiv">
          <img
            className="cardImage"
            alt={day.weather}
            src={day.icon ? `${apiImageUrl}${day.icon}.png` : weatherError}
          />
        </Item>
        <Item className="cardWeather">{day.weather}</Item>
        <Item label="Day">{day.day}℃</Item>
        <Item label="Night" className="cardNight">
          {day.night}℃
        </Item>
      </Descriptions>
    </Card>
  );
};
