import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet,  } from "react-native";
import reset from '../../css/reset';

export default class Itens extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.container,]}>
                <View style={[reset.styles.m10, reset.styles.center]}>
                    <TouchableOpacity>
                        <Image source={{uri: this.props.item.foto}} style={{width: 100, height: 100}} />
                    </TouchableOpacity>
                </View>
                <View style={[reset.styles.m10, styles.detail]}>
                    <Text numberOfLines={2} style={[styles.titulo,]}>{this.props.item.titulo}</Text>
                    <Text>{this.props.item.valor}</Text>
                    <Text>{this.props.item.local_anuncio}</Text>
                    <Text>{this.props.item.data_publicacao}</Text>
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