import React from 'react';

import Flat from './flat';

const FlatList = ({ flats, selectFlat, selectedFlat }) => {
  return (
    flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          key={flat.lat}
          selectFlat={selectFlat}
          index={index}
          selected={selectedFlat.name === flat.name}
        />
      );
    })
  );
};

export default FlatList;
