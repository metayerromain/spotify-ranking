import React from 'react';
import { Text, View, Button, SafeAreaView } from 'react-native';
import { AuthSession } from 'expo';
const SPOTIFY_APP_ID = '032847b9064643bbb459528d0ab2012a';



class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    //Connexion à l'authentification Spotify
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


        this.setState({ 
            access_token : result.params.access_token,
            profileLoaded: true 
        });

        this.props.updateData(this.state.access_token)

    };

    render(){
        return(
            <Button title="Connexion à Spotify" onPress={this._handlePressAsync} />
        )
    }

}

export default Login;