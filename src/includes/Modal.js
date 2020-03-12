import React from 'react';
import Modal from "react-native-modal";
import { Text, View, ImageBackground, FlatList, ScrollView } from 'react-native';
import Card from "../includes/Card.js";

import {getArtist, getArtistTracks} from "../services/api.js";

//Style
import globalStyle from '../styles/style-global.js'
import modalStyle from '../styles/style-modal.js'
import { LinearGradient } from 'expo-linear-gradient'

import { AntDesign } from '@expo/vector-icons';


class ModalArtist extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            modalVisible: this.props.isVisible,
            loadingArtist: true,
            loadingTracks: true,
        }
    }

    /*
    |
    | -- Go to artist query
    |
    */
    componentDidMount(){
        getArtist(this.props.id).then(result => {
            this.setState({
                dataArtist : result,
                loadingArtist: false,
            })
        })
        getArtistTracks(this.props.id).then(result => {
            this.setState({
                dataTracks : result.tracks,
                loadingTracks: false,
            })
        })
    }


    /*
    |
    | -- State Change (visible or not) 
    |
    */
    componentDidUpdate(){
        if(!this.state.modalVisible){
            this.props.closeModal()
        }
    }

    render(){

        const data = this.state.dataArtist;

        return(
            <Modal
                visible={this.state.modalVisible}
                onModalHide={() => this.setState({ modalVisible: false })}
                animationType="slide"
                style={{margin: 0}}
            >
                {this.state.loadingArtist ? (

                    <Text>Chargement de vos données</Text>

                ):(
                    <View style={modalStyle.container}>    
                        <View style={modalStyle.containerInner}>

                            {/* Close icon */} 
                            <AntDesign name="closecircle" size={32} color="white" 
                                onPress={() => {
                                    this.setState({modalVisible: false});
                                }}
                                style={{position: 'absolute', right: 15, top: 15, zIndex: 3}}
                            />

                            {/* Body Modal */}
                            <View>
                                <ImageBackground source={{uri:data.images[0].url}} style={{width: '100%', height: 250}}>
                                    <LinearGradient
                                        colors={['transparent', 'rgba(255,255,255,.4)','rgba(255,255,255,1)']}
                                        start={[0, 0.2]}
                                        end={[0, .8]}
                                        style={{height: 250}}
                                    >   
                                        <View style={modalStyle.containerInfos}>
                                            <Text style={modalStyle.name}>{data.name}</Text>
                                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                                {data.genres.map((element, i) =>{
                                                    return <Text key={i} style={modalStyle.genres}>{element}, </Text>
                                                })}
                                            </View>
                                        </View>
                                    </LinearGradient>
                                </ImageBackground>
                                <View>
                                    {!this.state.loadingTracks ? (
                                        <FlatList
                                        data={this.state.dataTracks}
                                        renderItem={({item, index}) => {
                                            return <Card datas={item} type='tracks' id={index}></Card>
                                        }}
                                        keyExtractor={item => item.id}
                                        style={modalStyle.list}
                                    />
                                    ):(
                                        <Text>Cargement...</Text>
                                    )}
                                </View>
                            </View>
                            
                        </View>
                    </View>

                )}
            </Modal>
        )
    }
}

export default ModalArtist;