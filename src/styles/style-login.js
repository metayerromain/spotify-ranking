import { StyleSheet } from 'react-native';

const primaryColor = "#50496D";
const secondColor = "#ABA5C3";

const loginStyle = StyleSheet.create({

    background: {
        height: '100%',
        width: '100%',

        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 150,

        paddingTop: 10, 
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,

        backgroundColor: primaryColor,
        borderRadius: 50,
    },
    text: {
        color: '#FFF',
        fontSize: 16,
    }

})

export default loginStyle;