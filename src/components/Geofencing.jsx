import React, { useEffect, useState, useRef } from "react";
import { useGeolocation } from "./Location";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { icon } from "leaflet";
import marker from "./locationicon.png";
const Geofencing = () => {
  const { isAvailable, isEnabled, coordinates } = useGeolocation();
  const mapRef = useRef(null);

  const [clientLocation, setClientLocation] = useState([20, 80, 4]);

  useEffect(() => {
    const updateClientLocation = () => {
      if (isAvailable && isEnabled && coordinates) {
        setClientLocation([coordinates.latitude, coordinates.longitude, 15]);
       }
    };

    updateClientLocation();

    const intervalId = setInterval(updateClientLocation, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isAvailable, isEnabled, coordinates]);

  const ZoomLocation = (latitude, longitude) => {
    if (mapRef.current) {
      mapRef.current.flyTo([latitude, longitude], 15, {
        animate: true,
        duration: 2, 
      });
    }
  };


  const customIcon = icon({
    iconUrl: marker,
    iconSize: [15, 20],
  });

  return (
    <>
      {isAvailable ? (
        isEnabled ? (
          <div className="map-container w-full h-[50vh] relative">
            <MapContainer
              center={[20, 80]}
              zoom={4}
              style={{ height: "100%", width: "100%" }}
              ref={mapRef}
              whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <TileLayer
                url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> contributors'
              />
              <Marker
                position={[clientLocation[0], clientLocation[1]]}
                icon={customIcon}
                eventHandlers={{
                  click: () => {
                    ZoomLocation(clientLocation[0], clientLocation[1]);
                  },
                }}
              />
            </MapContainer>
          </div>
        ) : (
          <p>Geolocation is not enabled in your browser.</p>
        )
      ) : (
        <p>Your browser does not support geolocation.</p>
      )}
    </>
  );
};

export default Geofencing;
