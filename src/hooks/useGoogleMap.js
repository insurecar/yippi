import { useEffect, useState } from 'preact/compat'
import GoogleMapsApiLoader from 'google-maps-api-loader'

const useGoogleMap = apiKey => {
  const [googleMap, setGoogleMap] = useState(null)

  useEffect(() => {
    GoogleMapsApiLoader({ apiKey }).then(google => {
      setGoogleMap(google)
    })
  }, [])

  return googleMap
}

const useMap = ({ googleMap, mapContainerRef, initialConfig }) => {
  const [map, setMap] = useState(null)

  useEffect(() => {
    if (!googleMap || !mapContainerRef.current) return

    const map = new googleMap.maps.Map(mapContainerRef.current, initialConfig)

    new googleMap.maps.Marker({
      position: initialConfig.center,
      map: map
    })

    setMap(map)
  }, [googleMap, mapContainerRef])

  return map
}

export { useGoogleMap, useMap }
