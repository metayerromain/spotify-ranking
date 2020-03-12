import { StyleSheet } from 'react-native';

const primaryColor = "#50496D";

const loginStyle = StyleSheet.create({

    bigContainer: {
		paddingRight: 16,
		paddingLeft: 16,
		height: '100%',
    },
    
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    textContainer: {
        position: 'absolute',
        width: '100%',
        left: 16,
        bottom: 100,
    },

    titleContainer : {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '900',
        color: primaryColor,
        textAlign: 'center',
        width: '60%',
    },

    button: {
        marginTop: 32,

        paddingTop: 16, 
        paddingBottom: 16,

        backgroundColor: primaryColor,
        borderRadius: 4,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '700'
    }

})

export default loginStyle;