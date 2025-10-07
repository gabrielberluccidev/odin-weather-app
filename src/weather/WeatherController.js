import { getWeather } from './getAPI';
import { fahrenheitToCelsius } from './convertTemp';
import { getCity } from './getValues';
import { getCardInfo } from './getValues';

export function initAppController() {
  const searchButton = document.querySelector('#search');

  searchButton.addEventListener('click', async () => {
    const { cityHTML, tempHTML, statusHTML, iconHTML, errorHTML } =
      getCardInfo();
    errorHTML.textContent = '';
    tempHTML.textContent = '';
    cityHTML.textContent = '';
    statusHTML.textContent = '';
    iconHTML.textContent = '';

    try {
      const cityInput = getCity();

      if (!cityInput) {
        throw new Error('Please, insert a city.');
      }

      const { temp, cityAPI, icon, status } = await getWeather(cityInput);
      const temperatureInC = fahrenheitToCelsius(temp);

      tempHTML.textContent = `${temperatureInC.toFixed(1)}°C`;
      cityHTML.textContent = `${cityAPI}`;
      iconHTML.textContent = `${icon}`;
      statusHTML.textContent = `${status}`;
    } catch (error) {
      console.error(error.message);
      errorHTML.textContent = error.message;
    }
  });
}
