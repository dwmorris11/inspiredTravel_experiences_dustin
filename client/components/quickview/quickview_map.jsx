import React from 'react';
import { objectOf, number } from 'prop-types';

const Map = ({ mapSource }) => {
  const mapApiParameterFormat = `${mapSource.lat},${mapSource.lng}`;
  const src = `https://maps.googleapis.com/maps/api/staticmap?center=${mapApiParameterFormat}&zoom=13&size=300x150&markers=size:mid%7Ccolor:red%7C${mapSource.lat},${mapSource.lng}&maptype=roadmap&key=AIzaSyDFiqDiCU4orquAvsIN4bDcNjuGhbNjOZ0`;
  return (
    <div className="QuickViewImage">
      <img src={src} alt="map" />
    </div>
  );
};

export default Map;

Map.propTypes = {
  mapSource: objectOf(number).isRequired,
};
