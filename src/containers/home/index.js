import React from 'react';
import { connect } from 'react-redux';
import { setGameLevel } from '../../store/actions/game.action';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Home extends React.Component {

  navigateToGame = item => {
    this.props.setGameLevel(item);
    this.props.navigation.navigate('Game');
  }

  renderItem = ({ item, index }) => {
    const { currentLevel, levels } = this.props;
    let isDisabled = item !== 1 && item !== currentLevel ? !levels[item].isCompleted : false;
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        key={index}
        disabled={isDisabled}
        style={{ backgroundColor: isDisabled ? '#e0e0e0' : 'transparent', ...styles.content }}
        onPress={() => this.navigateToGame(item)}>
        <Text style={styles.contentText}>Level {item}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.flex}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={this.renderItem}
          contentContainerStyle={styles.p20}
          keyExtractor={(item) => `level${item}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  levels: state.game.levels,
  currentLevel: state.game.currentLevel
});

const mapDispatchToProps = (dispatch) => ({
  setGameLevel: data => dispatch(setGameLevel(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  p20: {
    padding: 20
  },
  content: {
    borderWidth: 0.5,
    borderColor: '#4B419A',
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  contentText: {
    fontSize: 24,
    color: '#4B419A'
  }
})