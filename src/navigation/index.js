import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../containers/splash';
import Home from '../containers/home';
import Game from '../containers/game';

const Main = createStackNavigator();

const HomeStack = createStackNavigator();

function HomeStacks() {
  return (
    <HomeStack.Navigator screenOptions={ () => ({
      gestureEnabled: false,
      headerTintColor: 'white'
    }) }
    initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={ {
					headerTitle: 'Home',
					headerTitleAlign: 'center',
					headerTitleContainerStyle: {
						alignItems: 'center'
					},
					headerStyle: {
						backgroundColor: '#4B419A',
						height: 100
					},
					headerTitleStyle: {
						color: 'white',
						fontWeight: 'bold',
						fontSize: 28
					},
          headerBackTitleVisible: false,
          headerLeft: false,
				} }
      />
      <HomeStack.Screen
        name="Game"
        component={Game}
        options={ {
					headerTitle: 'Game',
					headerTitleAlign: 'center',
					headerTitleContainerStyle: {
						alignItems: 'center'
					},
					headerStyle: {
						backgroundColor: '#4B419A',
						height: 100
					},
					headerTitleStyle: {
						color: 'white',
						fontWeight: 'bold',
						fontSize: 28
					},
          headerBackTitleVisible: false,
          headerBackTitleStyle: {
            backgroundColor: 'white',
          }
				} }
      />
    </HomeStack.Navigator>
  );
}

function MainStack(props) {
  return (
    <Main.Navigator headerMode="none" gesturesEnabled={false}>
      <Main.Screen name="Splash" component={Splash} />
      <Main.Screen name="Home" component={HomeStacks} />
    </Main.Navigator>
  );
}

export default MainStack;