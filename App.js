import React from 'react';
import { SafeAreaView, AsyncStorage, Text, View } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppContext from './src/context/AppContext';

import {isConnected} from "./src/services/isConnected";

import Tracks from './src/views/Tracks.js';
import Artists from './src/views/Artists.js';
import Login from './src/views/Login.js'

// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

class App extends React.Component {

	constructor(props){
		super(props)

		/*
		|
		| -- Context State
		|
		*/
		this.state = {
			setToken: this.setToken,
			connected: false,
			access_token : null,
		}
	}


	/*
    |
    | -- Add token values to the context
    |
    */
	setToken = async (value) => {
		let access_token = await AsyncStorage.getItem("access_token");

		this.setState({
			connected : value,
			access_token,
		});
	};


	/*
    |
    | -- Start app and check if the token user is OK
    |
    */
	async componentDidMount(){
		let access_token = await AsyncStorage.getItem("access_token");

		var nonExpired = isConnected();

		if(access_token === null){

			this.setState({
				already_connected : false,
			})

		/*
		|
		| -- If token is in time and exists
		|
		*/
		} else if(access_token && nonExpired){

			this.setState({
				already_connected : true,
			})

		}
	}


	render(){

		// const Tabe = () => {
		// 	return (
			// <NavigationContainer>
				// <Stack.Navigator>
				// 	<Stack.Screen name="Tracks" component={Tracks} />
				// 	<Stack.Screen name="Artists" component={Artists} />
				// </Stack.Navigator>
			// </NavigationContainer>
		// 	)
		// }
		return (
			<AppContext.Provider value={this.state}>
				<View>
					{ this.state.already_connected || this.state.connected ?  
						<SafeAreaView>
							<Tracks/>
							{/* <Tabe/> */}
						</SafeAreaView>
						:
						<Login />
					}
				</View>
			</AppContext.Provider>
		  );
	}

}

export default App;

