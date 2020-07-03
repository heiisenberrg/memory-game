import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import Card from '../../components/card';
import CountDownTimer from '../../components/timer';
import { connect } from 'react-redux';
import Modal from '../../components/modal';
const {width} = Dimensions.get('window');

class Game extends React.PureComponent {
  constructor (props) {
    super(props)
    let numberOfColumns = this.props.levels[this.props.currentLevel].numberOfColumns;
    this.state = {
      numberOfColumns,
      itemContainerDimension: Math.floor((width - 60) / numberOfColumns), 
      data: this.props.levels[this.props.currentLevel].data,
      selectedCard: [],
      selectedIndex: [],
      nextPair: false,
      startTimer: true,
      timerMin: 2,
      timerSec: 0,
      showModal: false,
      gameStatus: '',
      moves: 0,
      score: 0
    }
  }

  setSelectedCard = (item, index) => {
    const { selectedCard, selectedIndex, nextPair } = this.state;
    if (!selectedCard.length) {
      this.setState({selectedCard: [item], selectedIndex: [index], moves: this.state.moves + 1, score: this.state.score + (item * 10) });
    } else {
      let cardData = [...selectedCard];
      let cardIndex = [...selectedIndex];
      cardIndex.pop();
      let lastValue = cardData[cardData.length - 1];
      if (!nextPair) {
        let nextPairValue = nextPair;
        if (lastValue === item) {
          cardData.push(item);
          cardIndex.push(index);
          nextPairValue = true;
        } else {
          nextPairValue = false;
        }
        this.setState({ selectedCard: cardData, selectedIndex: cardIndex, nextPair: nextPairValue, moves: this.state.moves + 1 }, () => {
          if (this.state.selectedCard.length === this.state.data.length) {
            this.setState({showModal: true, gameStatus: 'success'});
          }
        });
      } else {
        cardData.push(item);
        cardIndex.push(index);
        this.setState({ selectedCard: cardData, selectedIndex: cardIndex, nextPair: false, moves: this.state.moves + 1, score: this.state.score + (item * 10) });
      }
    }
  }

  setSelectedIndex = (index) => {
    let data = [...this.state.selectedIndex];
    if (!data.includes(index)) {
      data.push(index);
      this.setState({ selectedIndex: data});
    }
  }

  timesUp = () => {
    if (this.state.selectedCard.length === this.state.data.length) {
      this.setState({showModal: true, gameStatus: 'success'});
    } else {
      this.setState({showModal: true, gameStatus: 'failure'});
    }
  }

  renderItem = ({item,index}) => {
    let isFlipped = this.state.selectedIndex.includes(index);
    return (
      <Card 
        isFlipped={isFlipped} 
        height={this.state.itemContainerDimension} 
        width={this.state.itemContainerDimension} 
        item={item} 
        index={index} 
        setSelectedCard={(item, index) => this.setSelectedCard(item, index)}
        setSelectedIndex={(index) => this.setSelectedIndex(index)}
      />
    );
  }

  render() {
    const { data, numberOfColumns, showModal, gameStatus, score, moves } = this.state;
    return (
      <View style={{flex: 1}}>
        <View style={{padding: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <View style={{alignItems: 'center'}}>
             <Text>Time Left</Text>
             <CountDownTimer timesUp={() => this.timesUp()} />
          </View>
          <View style={{alignItems: 'center'}}>
             <Text>Score</Text>
             <Text>{score}</Text>
          </View>
        </View>
        <FlatList 
          data={data}
          numColumns={numberOfColumns}
          renderItem={this.renderItem}
          contentContainerStyle={{marginTop: 50,  marginHorizontal: 20, justifyContent: 'center', alignItems: 'center'}}
          keyExtractor={(item) => `level${item}`}
          ItemSeparatorComponent={() => <View style={{height: 10}}/>}
        />
        {showModal && <Modal visible={showModal} status={gameStatus} level={this.props.currentLevel} score={score} moves={moves} />}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currentLevel: state.game.currentLevel,
  levels: state.game.levels
});

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Game);