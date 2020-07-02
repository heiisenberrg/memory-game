import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../containers/splash';
import Home from '../containers/home';
import Game from '../containers/game';

const Main = createStackNavigator();

const HomeStack = createStackNavigator();

function HomeStacks() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Game"
        component={Game}
        options={{headerShown: false}}
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