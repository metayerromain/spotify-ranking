import { StyleSheet } from 'react-native';

const primaryColor = "#50496D";
const secondColor = "#ABA5C3";

const cardStyle = StyleSheet.create({
	item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 15,
        paddingTop: 15,
        position: 'relative',
        paddingLeft: 35
    },
    indexContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center', 
    },
    index: {
        fontSize: 20,
        fontWeight: '900',
        color: secondColor,
    },
    image: {
        marginRight: 15,
        width: 65,
        height: 65,
        borderRadius: 4,
    },
    title: {
        fontWeight: '900',
        color: primaryColor,
    },
    name: {
        marginTop: 5,
        color: secondColor,
    }
});

export default cardStyle;