import React from 'react';
import { View, Text, StatusBar } from 'react-native';

class Splash extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 3000)
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: '#4B419A',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 50 }}>
          Memory Game
        </Text>
        <View style={{ position: 'absolute', bottom: 40, alignSelf: 'center' }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 12,
              letterSpacing: 3,
            }}
          >
            FROM
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              textAlign: 'center',
              letterSpacing: 4,
            }}
          >
            AJAYKKUMAR
          </Text>
        </View>
      </View>
    );
  }
}

export default Splash;