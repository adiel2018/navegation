import React, { Component } from 'react';
import ListItens from './ListItens';

export default class HomeScreen extends Component {

  /*
  componentWillMount(){
      setTimeout(()=>{
          this.props.navigator.push({
              screen: 'navegation.ItemScreen',
              title: 'Pushed Screen',
              backButtonTitle: 'voltar'
            });
          }, 3000
      );
  }
  */
  render() {
    return (
      <ListItens/>
    );
  }
}
