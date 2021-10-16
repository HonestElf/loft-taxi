import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import { MapContainer, MapWidget, MapWrapper } from './_styles';

mapboxgl.accessToken =
  'pk.eyJ1IjoiaG9uZXN0ZWxmIiwiYSI6ImNrdXIwOW9yZTBzcW4yeHA1NTFuYmxhZ3QifQ.2LYJaSOpxMJsk64OzVa_Ig';

const Map = () => {
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [50, 50],
      zoom: 2,
    });

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return (
    <MapContainer>
      <MapWrapper>
        <MapWidget data-testid="map" ref={mapContainerRef} />
      </MapWrapper>
    </MapContainer>
  );
};

export default Map;
