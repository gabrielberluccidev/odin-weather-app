export function getCity() {
  const input = document.querySelector('#city-input').value;

  if (!input) {
    return 'please, insert a city.';
  }

  return input;
}

export function getCardInfo() {
  const city = document.querySelector('#city');
  const temperature = document.querySelector('#temperature');
  const status = document.querySelector('#status');
  const icon = document.querySelector('span');

  return { city, temperature, status, icon };
}
