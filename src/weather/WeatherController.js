import { getWeather } from './getAPI';
import { fahrenheitToCelsius } from './convertTemp';
import { getCity } from './getValues';
import { validateResult } from './validateResult';

export function initAppController() {
  const searchButton = document.querySelector('#search');

  searchButton.addEventListener('click', () => {
    const city = getCity();

    const result = getWeather(city);

    result.then((result) => {
      validateResult(result);
    });

    const temperature = fahrenheitToCelsius(result);
  });
}
