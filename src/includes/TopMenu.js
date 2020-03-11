import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

//style
import globalStyle from '../styles/style-global.js'
import topMenu from '../styles/style-top-menu.js'

class TopMenu extends React.Component {

    handlePress = (newRange) => {
        this.props.onUpdate(newRange)
    }


    render(){
        return(
            <View style={globalStyle.container}>

                <View style={topMenu.containerInner}>

                    <TouchableOpacity style={topMenu.button} onPress={this.handlePress.bind(this,'short_term')}>
                        <Text>Le mois dernier</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={topMenu.button} onPress={this.handlePress.bind(this,'medium_term')}>
                        <Text>6 derniers mois</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={topMenu.button} onPress={this.handlePress.bind(this,'long_term')}>
                        <Text>Tout le temps</Text>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }

}

export default TopMenu;