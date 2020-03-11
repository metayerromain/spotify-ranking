import { AsyncStorage } from 'react-native';


/*
|
| -- Check if the token is already good
|
*/
export async function isConnected() {

    const now = Math.floor(Date.now() / 1000) + 3600;
    let tokenExpires = await AsyncStorage.getItem("access_token_expires");
    
    if(now < tokenExpires){
        return true;
    } else {
        return false;
    }
    
}
