import React, { FC, useEffect, useState } from 'react';
import { Layout } from 'antd';
import { Footer } from './components/Footer';
import { fetchByLocation } from './api/selectLocation';
import { LocationCoord } from './types/locationDataType';
import { Main } from './components/Main';
import { Head } from './components/Head';

export const App: FC = () => {
  const [locationCoord, setLocationCoord] = useState<LocationCoord>({
    lat: 0,
    lon: 0,
  });
  const [locationName, setLocationName] = useState<string>('');

  const [error, setError] = useState<string>();

  const getLocationCoord = async () => {
    const response = await fetchByLocation(locationName);
    const data = await response.json();

    if (data.message) {
      return setError(data.message);
    }
    setError('');

    setLocationCoord({
      lat: data.city.coord.lat,
      lon: data.city.coord.lon,
    });
  };

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) =>
      setLocationCoord({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      })
    );
  }, []);

  useEffect(() => {
    if (locationName) {
      getLocationCoord();
    }
  }, [locationName]);

  return (
    <Layout className="root">
      <Head setLocationName={setLocationName} />
      <Main
        locationCoord={locationCoord}
        locationName={locationName}
        error={error}
        setError={setError}
      />
      <Footer />
    </Layout>
  );
};

export default App;
