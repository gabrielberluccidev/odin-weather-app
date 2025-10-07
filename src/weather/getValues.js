export function getCity() {
  const cityInput = document.querySelector('#city-input').value;

  return cityInput;
}

export function getCardInfo() {
  const cityHTML = document.querySelector('#city');
  const tempHTML = document.querySelector('#temperature');
  const statusHTML = document.querySelector('#status');
  const iconHTML = document.querySelector('span');
  const errorHTML = document.querySelector('#error-message');

  return { cityHTML, tempHTML, statusHTML, iconHTML, errorHTML };
}
