import { h } from 'preact'
import { useEffect, useState } from 'preact/compat'
import Helmet from 'preact-helmet'
import { ToastProvider } from 'react-toast-notifications'
import { t } from 'ttag'
import Gallery from './components/Gallery/index';

import 'font-awesome/css/font-awesome'
import 'intl-tel-input/build/css/intlTelInput.min.css'
import 'object-fit-images'
import 'url-search-params-polyfill'

import './style/main.scss'

import setupListeners from './main.js'

import { setLocales } from './locale'

import Analytics       from './components/Analytics'
import Header          from './components/Header'
import Info            from './components/Info'
import StaticGallery   from './components/StaticGallery'
import UnitList        from './components/UnitList'
import FooterWrapper   from './components/FooterWrapper'
import Form            from './components/Form'
import Agent           from './components/Agent'
import Map             from './components/Map'

import getQueryParams from './getQueryParams'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState({})
  const params = getQueryParams()

  const dataUrl = params.get('dataUrl') || 'index.json'

  useEffect(() => {
    if (isLoading) return

    setupListeners()
  }, [isLoading])

  useEffect(() => {
    if (!('scrollBehavior' in document.documentElement.style)) {
      import('scroll-behavior-polyfill')
    }
  }, [])

  useEffect(() => {
    fetch(dataUrl, { Accept: 'application/json' })
      .then(response => response.json())
      .then(json => setData(json))
      .then(() => setIsLoading(false))
  }, [dataUrl])

  useEffect(() => {
    if (isLoading) return

    setLocales(data)
  }, [isLoading, data])

  if (isLoading) return null

  return (
    <ToastProvider autoDismissTimeout={10000}>
      <Helmet
        title={data.title}
        script={
          [
            {
              src: `${data.host}packs/tags.js?company_uuid=${data.companyUuid}`,
              type: "text/javascript"
            }
          ]
        }
      />
      <Analytics {...data} />
      <Header {...data} />
       <Info {...data} />
       <StaticGallery {...data} />
       {/* <Gallery {...data} /> */}
       <Map  {...data} />
      <UnitList {...data} />
      <Form {...data} />
      <Agent {...data} />
      <FooterWrapper {...data} />    
    </ToastProvider>
  )
}

export default App
