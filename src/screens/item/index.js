import React, { Component } from 'react';
import { Text } from "react-native";

export default class ItemScreen extends Component {

  componentWillMount(){
    this.props.navigator.setTitle({
      title: "Dynamic Title" // the new title of the screen as appears in the nav bar
    });
  }

  render() {
    return (
      <Text>Item</Text>
    );
  }
}
