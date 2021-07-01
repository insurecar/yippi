import { browserDefaultLocale, currentCurrency, currentCountry } from '../locale'

const formatPrice = num => {
  const priceEnding = currentCountry == 'NO' ? ',-' : ''

  return num.toLocaleString(
    browserDefaultLocale,
    {
      style: 'currency',
      currency: currentCurrency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }
  ) + priceEnding
}

export {
  formatPrice
}
