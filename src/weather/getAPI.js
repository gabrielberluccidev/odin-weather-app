import { API_KEY } from '../key';

export async function getWeather(city) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === 400 || response.status === 404) {
      throw new Error('City not founded. Verify the name.');
    }
    throw new Error(`Erro no servidor: ${response.status}`);
  }

  const result = await response.json();

  console.log(result);

  const temp = result.currentConditions.temp;
  const cityAPI = result.address;
  const icon = result.currentConditions.icon;
  const status = result.currentConditions.conditions;

  console.log(temp, cityAPI, icon, status);

  return { temp, cityAPI, icon, status };
}
