import React from 'react';

export const PackingDefaults = {
  allItems: ['nacho', 'burrito', 'hotdog'],
  newItemName: '',
};

export const PackingContext = React.createContext({
  ...PackingDefaults,
});
