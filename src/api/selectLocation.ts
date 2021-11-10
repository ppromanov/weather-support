import { apiKey, api } from '../constants/api';
import { LocationCoord } from '../types/locationDataType';

export const fetchByLocation = (location: string): Promise<Response> =>
  fetch(`${api}forecast?q=${location}&appid=${apiKey}&units=metric`);

export const fetchByСoord = (coord: LocationCoord): Promise<Response> =>
  fetch(
    `${api}onecall?lat=${coord.lat}&lon=${coord.lon}&appid=${apiKey}&units=metric`
  );
