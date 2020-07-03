import React from "react";
import { View, TouchableOpacity, Animated, Text } from "react-native";

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rotate: new Animated.Value(0)
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isFlipped !== this.props.isFlipped) {
      if (this.props.isFlipped) {
        this.state.rotate.setValue(1);
      } else {
        this.state.rotate.setValue(0);
      }
      Animated.spring(this.state.rotate,
        {
          toValue: Number(!this.props.isFlipped),
          useNativeDriver: true
        }
      ).start(() => {
        if (this.props.isFlipped) {
          setTimeout(() => this.props.setSelectedCard(this.props.item, this.props.index), 100);
        }
      })
    }
  }

  setSelectedIndex = () => {
    setTimeout(() => this.props.setSelectedIndex(this.props.index), 100);
    this.state.rotate.setValue(1);
    Animated.spring(this.state.rotate,
      {
        toValue: Number(!this.props.isFlipped),
        useNativeDriver: true
      }
    ).start();
  }

  renderBackCard = () => {
    return (
      <View style={{ height: this.props.height, width: this.props.width, transform: [{ scaleX: 1 }], borderRadius: 5, borderWidth: 1, elevation: 3, borderColor: '#4B419A', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#4B419A' }}>{this.props.item}</Text>
      </View>
    )
  }

  renderFrontCard = () => {
    return (
      <View style={{ height: this.props.height, width: this.props.width, borderRadius: 5, borderWidth: 1, elevation: 3, borderColor: '#4B419A', justifyContent: 'center', alignItems: 'center', backgroundColor: '#4B419A' }} />
    )
  }

  render() {
    const { isFlipped } = this.props;
    const { rotate } = this.state;
    return (
      <TouchableOpacity activeOpacity={1} onPress={() => this.setSelectedIndex()}>
        <Animated.View style={[{ transform: [{ rotateY: rotate.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '180deg'] }) }], marginRight: 10 }]}>
          {isFlipped && this.renderBackCard()}
          {!isFlipped && this.renderFrontCard()}
        </Animated.View>
      </TouchableOpacity>
    )
  }
}

export default Card;
