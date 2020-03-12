import React from 'react';
import { TouchableOpacity, AsyncStorage, SafeAreaView, Text, View, Image} from 'react-native';

import AppContext from '../context/AppContext';

import { AuthSession } from 'expo';
const SPOTIFY_APP_ID = '032847b9064643bbb459528d0ab2012a';

import loginStyle from '../styles/style-login.js'


/*
|
| -- Get Date
|
*/
const now = Math.floor(Date.now() / 1000) + 3600;
const expiresDate = Math.floor(now + 3600);


class Login extends React.Component {

    static contextType = AppContext;

    constructor(props){
        super(props);
        this.state = {

        }
    }


    /*
    |
    | -- Connexion à l'authentification Spotify
    |
    */
    _handlePressAsync = async () => {
        let redirectUrl = AuthSession.getRedirectUrl(); 
        let result = await AuthSession.startAsync(
        {
            authUrl:
            `https://accounts.spotify.com/authorize?response_type=token`  +
            `&client_id=${SPOTIFY_APP_ID}` +
            '&scope=user-read-private%20user-read-email%20user-top-read' +
            `&redirect_uri=${
                encodeURIComponent(
                redirectUrl
                ) }`,
            }
        );

        
        /*
        |
        | -- Set token in Storage App
        |
        */
        let token = await AsyncStorage.getItem("access_token_expires");

        if(token === null){
            AsyncStorage.setItem('access_token_expires', JSON.stringify(expiresDate));
            //save the token
            AsyncStorage.setItem('access_token', result.params.access_token);

        }
        else{
            AsyncStorage.removeItem('access_token_expires');
            AsyncStorage.setItem('access_token_expires', JSON.stringify(expiresDate));
            //save the token
            AsyncStorage.setItem('access_token', result.params.access_token);
        }


        /*
        |
        | -- Set Context to connected
        |
        */
       this.context.setToken(true);

    };

    render(){
        return(

            <View style={loginStyle.bigContainer}>

                <View style={loginStyle.container}>
                    <Image source={require('../../assets/background-login.png')} style={loginStyle.image}></Image>
                </View>

                <View style={loginStyle.textContainer}>
                    <View style={loginStyle.titleContainer}>
                        <Text style={loginStyle.title}>Découvrez vos top sur Spotify </Text>
                    </View>
                    <TouchableOpacity style={loginStyle.button} onPress={this._handlePressAsync}>
                        <Text style={loginStyle.buttonText}>Connectez-vous</Text>
                    </TouchableOpacity>
                </View>

            </View>

                
        )
    }

}

export default Login;