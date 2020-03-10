import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import homeStyle from '../styles/style-home.js';
import Login from '../views/Login.js'
import {getTop} from "../services/api.js";


class Tracks extends React.Component {

    constructor(props){
        super(props);
        this.state = { 
            isLoading: true,
            profileLoaded: false,
            access_token: null,
            dataLoaded: [],
        }
    }

    
    /*
    |
    | -- Query on API
    |
    */
    loadData() {
        getTop(this.state.access_token).then(result => {
            console.log('resulat requete :', result.items)
            this.setState({
                dataLoaded : result.items,
                isLoading : false,
            })
        })
    }


    /*
    |
    | -- Get access Token
    |
    */
    updateData = (data) => {

        this.setState({
            access_token : data,
            profileLoaded: true,
        })

        //Go Query
        this.loadData();
    }

    
    render() {
        return (
            <SafeAreaView style={homeStyle.container}>
                {this.state.profileLoaded ? 
                        
                        this.state.isLoading ? 
                        <Text>Chargement de vos données</Text>
                        : 
                        this.state.dataLoaded.map( (item, i) => {
                            console.log('item',item.album.artists[0].name)
                            return(
                                <Text key={i}>{item.name}</Text>
                            )
                        })
                    :
                    <Login updateData={val => this.updateData(val)} />
                }
            </SafeAreaView>

        );
    }
}

export default Tracks;
