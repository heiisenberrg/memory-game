import React from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';

class Home extends React.Component {

  navigateToGame = item => {
    this.props.navigation.navigate('Game');
  }

  renderItem = ({item, index}) => {
    return (
      <TouchableOpacity key={index} style={{ borderWidth: 0.5, borderColor: '#4B419A', borderRadius: 5, padding: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 15}} onPress={() => this.navigateToGame(item)}>
        <Text style={{fontSize: 24, color: '#4B419A'}}>Level {item}</Text>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList 
         data={[1,2,3,4,5,6,7,8,9,10]}
         renderItem={this.renderItem}
         contentContainerStyle={{marginTop: 50, marginHorizontal: 20, marginBottom: 20}}
         keyExtractor={(item) => `level${item}`}
        />
      </View>
    );
  }
}

export default Home;