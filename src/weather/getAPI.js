import { API_KEY } from '../key';

export async function getWeather(city) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API_KEY}`;

  const response = await fetch(url);

  try {
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();

    return result.currentConditions.temp;
  } catch (error) {
    return error.message;
  }
}
