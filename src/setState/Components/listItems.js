/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { SimpleList } from 'packlist-components';

export default class ListItems extends Component {
  render() {
    return <SimpleList value={this.props.allItems} />;
  }
}
