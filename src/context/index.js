/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import ListItems from './Component/listItems';
import AddItems from './Component/addItem';
import { PackingContext } from './Context/packingContext';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

export default class Context extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      allItems: ['machos', 'burritos', 'hot dog'],
      newItemName: '',
      addItem: this.addItem,
      setNewItemName: this.setNewItemName,
      clear: this.clear,
    };
  }

  addItem = () => {
    this.setState((state) => ({
      allItems: [...state.allItems, state.newItemName],
      newItemName: '',
    }));
  };

  setNewItemName = (event) => {
    this.setState({ newItemName: event.target.value });
  };

  clear = () => {
    this.setState({ allItems: [] });
  };

  render() {
    return (
      <div style={styles}>
        <h2>Welcome to React 16 Context</h2>
        <PackingContext.Provider value={this.state}>
          <AddItems />
          <ListItems />
        </PackingContext.Provider>
      </div>
    );
  }
}
