import React, { Component } from 'react';
import { ScrollView, StyleSheet } from "react-native";
import Loading from './../../components/Loading';
import Itens from './Itens';
import Axios from 'axios';

export default class ListItens extends Component {

    constructor(props) {
        super(props);
        this.state = { items: [], loader: true };
    }
    
    componentWillMount() {
        Axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
            .then( (res) => {
                this.setState({ 
                    items: res.data,
                    loader: false,
                });
            })
            .catch(error => console.log(error));
    }
    
    render() {

        if(this.state.loader){
            return(
                <Loading/>
            );
        }

        if(!this.state.loader){
            return (
                <ScrollView style={[styles.container]}>
                    { this.state.items.map(item => {
                        return (
    
                            <Itens key={item.titulo} item={item} navigator={this.props.navigator} />
                        );
                    }) }
                </ScrollView>
            ); 
        }
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eee',
    }
})