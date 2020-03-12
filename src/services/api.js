import { AsyncStorage } from 'react-native';

module.exports = {

    /*
    |
    | -- Query for the spotify top artists and tracks
    |
    */
    getTop: async (time_range, type) => {

        let access_token = await AsyncStorage.getItem("access_token");

        let offset = 0;
        let limit = 15;

        let response = await fetch(`https://api.spotify.com/v1/me/top/${type}?time_range=${time_range}&limit=${limit}&offset=${offset}`, {
            headers: { 
                'Accept': 'application/json',
                'content-type': 'application/x-www-form-urlencoded',
                "Authorization" : `Bearer ${access_token}`,
            },
            method: 'GET',
        });

        return await response.json();

    },

    getArtist: async (id) => {

        let access_token = await AsyncStorage.getItem("access_token");

        let response = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
            headers: { 
                'Accept': 'application/json',
                'content-type': 'application/x-www-form-urlencoded',
                "Authorization" : `Bearer ${access_token}`,
            },
            method: 'GET',
        });
    
        return await response.json();

    },


    /*
    |
    | -- Query for the spotify artists tracks
    |
    */
    getArtistTracks: async (id) => {

        let country = 'FR'

        let access_token = await AsyncStorage.getItem("access_token");

        let response = await fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=${country}`, {
            headers: { 
                'Accept': 'application/json',
                'content-type': 'application/x-www-form-urlencoded',
                "Authorization" : `Bearer ${access_token}`,
            },
            method: 'GET',
        });
    
        return await response.json();

    }

}