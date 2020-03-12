import { StyleSheet } from 'react-native';

const primaryColor = "#50496D";
const secondColor = "#ABA5C3";

const modalStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    
    containerInner: {
        width: '100%',
        height: '90%',
        backgroundColor: '#FFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20, 
        overflow: 'hidden'
    },

    containerInfos: {
        position: 'absolute',
        bottom: 10,
        left: 16,
        right: 16
    },

    name: {
        marginBottom: 5,
        fontSize: 32,
        fontWeight: '900',
        color: primaryColor
    },

    genres: {
        color: secondColor,
        fontSize: 14
    },

    list: {
        position: 'absolute', 
        flex: 1,
        height: 500,
        width: '100%',
        left: 16,
    }
})

export default modalStyle;