import { Col, Typography } from 'antd';
import React, { FC } from 'react';

const { Title } = Typography;

export const SelectedGraph: FC = () => {
  return (
    <Col span={12} className="selectedGraph">
      <Title level={1}>Location Graph</Title>
    </Col>
  );
};
