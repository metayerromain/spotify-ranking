import { StyleSheet } from 'react-native';

const primaryColor = "#50496D";
const secondColor = "#ABA5C3";

const topMenu = StyleSheet.create({
    containerInner : {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        alignItems: 'center',
        color: secondColor,
        padding: 10
    },
    activeButton: {
        alignItems: 'center',
        color: primaryColor,
        padding: 10,
        fontWeight: '900',
        textDecorationLine: 'underline',
        textDecorationColor: primaryColor
    }
    
});

export default topMenu;