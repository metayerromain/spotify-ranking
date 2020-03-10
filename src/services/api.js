module.exports = {

    getTop: async (access_token) => {

        let type = "tracks";

        let response = await fetch(`https://api.spotify.com/v1/me/top/${type}?time_range=short_term&limit=5&offset=0`, {
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