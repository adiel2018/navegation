import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet,  } from "react-native";
import { BASE_URL } from '../../../constants/config';
import reset from '../../../css/reset';

export default class CardItens extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.container,]}>
                <View style={[reset.styles.m10, reset.styles.center]}>
                    <TouchableOpacity>
                        <Image source={{uri: `${BASE_URL}/media/${this.props.item.capa.usuario}/${this.props.item.id}/${this.props.item.capa.img}?w=350`}} style={{width: 100, height: 100}} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      marginBottom: 10,
      borderColor: '#d8d8d8',
      borderWidth: 0.5,
      flexDirection: 'row',
    },

    detail: {
        flex: 1,
    },

    titulo: {
        fontSize: 18,
        color: '#5c5c5c',
        marginBottom: 5,
    }
})