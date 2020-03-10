import React from 'react';
import { View } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Tracks from './src/views/Tracks.js';
import Artists from './src/views/Artists.js';

const Tab = createBottomTabNavigator();

export default function App() {

  	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Tracks" component={Tracks} />
				<Tab.Screen name="Artists" component={Artists} />
			</Tab.Navigator>
		</NavigationContainer>
  	);
}


