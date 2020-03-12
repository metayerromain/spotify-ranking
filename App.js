import React from 'react';
import { AsyncStorage, View } from 'react-native';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppContext from './src/context/AppContext';

import {isConnected} from "./src/services/isConnected";

import Home from './src/views/Home.js';
import Login from './src/views/Login.js'

const Tab = createBottomTabNavigator();

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
		// AsyncStorage.removeItem("access_token");
		let access_token = await AsyncStorage.getItem("access_token");

		var nonExpired = await isConnected();

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

		const Nav = () => {
			return (
			<NavigationContainer>
				<Tab.Navigator 
					screenOptions={({ route }) => ({
						tabBarIcon: ({ focused, color, size }) => {
						let iconName;
			
						if (route.name === 'Top tracks') {
							iconName = 'ios-musical-notes';
							return <Ionicons name={iconName} size={size} color={color} />;
						} else if (route.name === 'Top artists') {
							iconName = 'artist';
							return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
						}},
					})}
					initialRouteName="Tracks"
					tabBarOptions={{
						activeTintColor: "#50496D",
						inactiveTintColor: "#ABA5C3",
						labelStyle: {
							fontSize: 14,
						},
						style: {
							shadowColor: "#000",
							shadowOffset: {
								width: 0,
								height: 10,
							},
							shadowOpacity: 0.53,
							shadowRadius: 13.97,

							elevation: 21,
						},
					}}
				>
					<Tab.Screen name="Top tracks" initialParams={{ type: 'tracks' }} component={Home}/>
					<Tab.Screen name="Top artists" initialParams={{ type: 'artists' }} component={Home} />
				</Tab.Navigator>
			</NavigationContainer>
			)
		}
		

		return (
			<AppContext.Provider value={this.state}>
				<View style = {{flex: 1}}>
					{ this.state.already_connected || this.state.connected ? (
						<Nav />
					):( 
						<Login />
					)}
				</View>
			</AppContext.Provider>
		  );
	}

}

export default App;

