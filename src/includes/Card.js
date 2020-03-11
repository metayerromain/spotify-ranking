import React from 'react';
import { Text, Image, View } from 'react-native';
import cardStyle from '../styles/style-card';

class Card extends React.Component{

    render(){

        const data = this.props.datas;
        
        return(
            <View style={cardStyle.item}>
                <View style={cardStyle.indexContainer}>
                    <Text style={cardStyle.index}>{this.props.id + 1}</Text>
                </View>
                <Image style={cardStyle.image} source={{uri:data.album.images[0].url}}></Image>
                <View>
                    <Text style={cardStyle.title}>{data.name}</Text>
                    <Text style={cardStyle.name}>{data.album.artists[0].name}</Text>
                </View>
            </View>
        );
    }
}

export default Card;