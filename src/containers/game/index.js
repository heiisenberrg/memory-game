import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import Card from '../../components/card';
const {width} = Dimensions.get('window');

const itemContainerWidth = Math.floor((width - 60) / 4);

class Game extends React.Component {

  renderItem = ({item,index}) => {
    return (
      <Card height={itemContainerWidth} width={itemContainerWidth} text={item}/>
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{padding: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <View style={{alignItems: 'center'}}>
             <Text>Time Left</Text>
             <Text>02:00</Text>
          </View>
          <View style={{alignItems: 'center'}}>
             <Text>Score</Text>
             <Text>5</Text>
          </View>
        </View>
        <FlatList 
         data={[1,2,3,4, 5,6,7,8,9, 10, 11, 12]}
         numColumns={4}
         renderItem={this.renderItem}
         contentContainerStyle={{marginTop: 100,  marginHorizontal: 20, justifyContent: 'center', alignItems: 'center'}}
         keyExtractor={(item) => `level${item}`}
         ItemSeparatorComponent={() => <View style={{height: 10}}/>}
        />
      </View>
    );
  }
}

export default Game;