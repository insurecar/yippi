import Cookie                   from 'js-cookie'
import { addLocale, useLocale } from 'ttag'

const availableLocales = ['en_US', 'en_AU', 'nb_NO', 'sv_SE']

const defaultLocale = 'nb_NO'
const LOCALE_COOKIE = '__locale'
const currentLocale = Cookie.get(LOCALE_COOKIE) || defaultLocale

const browserDefaultLocale = navigator.languages[0]

const defaultCurrency = 'NOK'
const CURRENCY_COOKIE = '__currency'
const currentCurrency = Cookie.get(CURRENCY_COOKIE) || defaultCurrency

const defaultCountry = 'NO'
const COUNTRY_COOKIE = '__country'
const currentCountry = Cookie.get(COUNTRY_COOKIE) || defaultCountry

let translationObj = null
try {
  translationObj = require(`./locales/${currentLocale}.po.json`)
} catch (e) {
  translationObj = require(`./locales/${defaultLocale}.po.json`)
}
addLocale(currentLocale, translationObj)
useLocale(currentLocale)

const setLocales = (data) => {
  const localeWithRegion = `${data.locale}_${data.country}`

  if (
    data.country && Cookie.get(COUNTRY_COOKIE) == data.country &&
    data.locale && Cookie.get(LOCALE_COOKIE) == localeWithRegion &&
    data.currency && Cookie.get(CURRENCY_COOKIE) == data.currency
  ) return

  Cookie.set(COUNTRY_COOKIE, data.country)
  Cookie.set(LOCALE_COOKIE, localeWithRegion)
  Cookie.set(CURRENCY_COOKIE, data.currency)

  window.location.reload()
}

export {
  browserDefaultLocale,
  availableLocales,
  defaultLocale,
  currentLocale,
  defaultCurrency,
  currentCurrency,
  defaultCountry,
  currentCountry,
  setLocales
}
