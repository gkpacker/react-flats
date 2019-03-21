import React from 'react';

import Flat from './flat';

const FlatList = ({ flats }) => {
  return(
    flats.map(({ name, imageUrl, lat, lng, priceCurrency, price }) => {
      return(
        <Flat
          name={name}
          key={name}
          imageUrl={imageUrl}
          lat={lat}
          lng={lng}
          priceCurrency={priceCurrency}
          price={price}
        />
      );
    })
  );
}

export default FlatList;
