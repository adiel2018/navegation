import { StyleSheet } from "react-native";

const reset = {
    color: {
        default: '#EA0000',
    },
    navBar: {
        backgroundColor: '#EA0000',
        textColor: '#fff'
    },

    styles: StyleSheet.create({
        bgWhite: {
            backgroundColor: '#fff',
        },
        
        p10: {
            padding: 10,
        },

        m10: {
            margin: 10,
        },

        center: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },

        progressBar: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
    })
}

export default reset;
