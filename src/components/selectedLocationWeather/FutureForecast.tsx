import { Col, Row, Select } from 'antd';
import React, { FC, useState } from 'react';
import { forecastWeather } from '../../types/locationDataType';
import { ForecastCard } from './ForecastCard';

export interface FutureForecastProps {
  forecast?: forecastWeather[];
}

const { Option } = Select;

export const FutureForecast: FC<FutureForecastProps> = ({ forecast }) => {
  const [dayCount, setDayCount] = useState<number>(1);
  return (
    <div className="forecast">
      <Row justify="center">
        <Select
          className="forecastSelect"
          defaultValue={1}
          onChange={(value) => setDayCount(value)}
        >
          <Option value={1}>Tomorrow</Option>
          <Option value={3}>Three Days</Option>
          <Option value={7}>Week</Option>
        </Select>
      </Row>
      <Row className="forecastCards" justify="space-around">
        {forecast?.slice(0, dayCount).map((day, index) => (
          <Col key={day.date}>
            <ForecastCard day={day} isTomorrow={index === 0} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
