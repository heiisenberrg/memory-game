import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Splash extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 3000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appName}>Memory Game</Text>
        <View style={styles.absoluteContainer}>
          <Text style={styles.fromText}>FROM</Text>
          <Text style={styles.developerName}>AJAYKKUMAR</Text>
        </View>
      </View>
    );
  }
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4B419A',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    color: 'white',
    fontSize: 50
  },
  absoluteContainer: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center'
  },
  fromText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 12,
    letterSpacing: 3,
  },
  developerName: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 4,
  }
})