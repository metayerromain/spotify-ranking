import React from 'react';
import { Text, Image, View, Linking, TouchableOpacity } from 'react-native';
import cardStyle from '../styles/style-card';

class Card extends React.Component{

    handlePress = (id) => {
        this.props.setModal(id)
    }

    render(){

        const data = this.props.datas;
        
        return(
            
            <View>
                {this.props.type == 'tracks'  ? 

                /*   
                |
                | -- Track card
                |
                */
                <TouchableOpacity style={cardStyle.item} onPress={()=>Linking.openURL(data.external_urls.spotify)}>
                    <View style={cardStyle.indexContainer}>
                        <Text style={cardStyle.index}>{this.props.id + 1}</Text>
                    </View>
                    <Image style={cardStyle.image} source={{uri:data.album.images[0].url}}></Image>
                    <View>
                        <View>
                            <Text style={cardStyle.title}>{data.name}</Text>
                        </View>
                        <Text style={cardStyle.name}>{data.album.artists[0].name}</Text>
                    </View>
                </TouchableOpacity>   
                :

                /*  
                |
                | -- Artist card
                |
                */
                <TouchableOpacity style={cardStyle.item} onPress={this.handlePress.bind(this, data.id)}>
                    <View style={cardStyle.indexContainer}>
                        <Text style={cardStyle.index}>{this.props.id + 1}</Text>
                    </View>
                    <Image style={cardStyle.image} source={{uri:data.images[0].url}}></Image>
                    <View>
                        <Text style={cardStyle.title}>{data.name}</Text>
                        <View style={{flexDirection :'row'}}>
                            {data.genres.map((element, i) =>{
                                if(i >= 1){
                                    return false;
                                } else {
                                    return <Text key={i} style={cardStyle.name}>{element}</Text>
                                }
                            })}
                        </View>
                    </View>
                </TouchableOpacity>
                }
            </View>
            
        );
    }
}

export default Card;