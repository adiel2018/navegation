import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import reset from '../css/reset';

export default class Loading extends Component {

    render() {
        return (
            <View style={[styles.container]}>
                <ActivityIndicator size="large" color={reset.color.primary} />
                <Text style={styles.text}>Carregando...</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },

    text: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 15,
    }
})