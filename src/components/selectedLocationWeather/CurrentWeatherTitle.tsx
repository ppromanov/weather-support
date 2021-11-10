import { Row, Typography } from 'antd';
import React, { FC } from 'react';
import { apiImageUrl } from '../../constants/api';
import weatherError from '../../assets/weatherError.png';

const { Title } = Typography;

interface CurrentWeatherTitleProps {
  icon?: string;
  name?: string;
}

export const CurrentWeatherTitle: FC<CurrentWeatherTitleProps> = ({
  icon,
  name,
}) => {
  return (
    <>
      <Title level={1} className="location">
        {name}
      </Title>
      <Row justify="center">
        <img
          className='titleImage'
          src={icon ? `${apiImageUrl}${icon}@2x.png` : weatherError}
          alt="Weather Icon"
        />
      </Row>
    </>
  );
};
