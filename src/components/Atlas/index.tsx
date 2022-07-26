import Map from 'react-map-gl'

const Atlas = () => (
  <Map
    mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
    initialViewState={{
      longitude: -122.4,
      latitude: 37.8,
      zoom: 14
    }}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  />
)

export default Atlas
