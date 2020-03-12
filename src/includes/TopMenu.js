import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

//style
import globalStyle from '../styles/style-global.js'
import topMenu from '../styles/style-top-menu.js'

class TopMenu extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            active : 1,
        }
    }

    handlePress = (newRange, idActive) => {
        this.props.onUpdate(newRange)

        this.setState({
            active : idActive,
        })

    }

    render(){
        return(
            <View style={globalStyle.container}>

                <View style={topMenu.containerInner}>

                    <TouchableOpacity onPress={this.handlePress.bind(this,'short_term', 1)}>
                        <Text style={this.state.active == 1 ? topMenu.activeButton : topMenu.button}>Le mois dernier</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.handlePress.bind(this,'medium_term', 2)}>
                        <Text style={this.state.active == 2 ? topMenu.activeButton : topMenu.button}>6 derniers mois</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.handlePress.bind(this,'long_term', 3)}>
                        <Text style={this.state.active == 3 ? topMenu.activeButton : topMenu.button}>Tout le temps</Text>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }

}

export default TopMenu;