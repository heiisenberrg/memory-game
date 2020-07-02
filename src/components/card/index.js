import React from "react";
import { View, TouchableOpacity, Animated, Text } from "react-native";

class Card extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isFlipped: false,
      rotate: new Animated.Value(0)
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.flip !== this.props.flip) {
       this._animation()
    }
  }

  _animation = () => {
    this.setState({isFlipped: !this.state.isFlipped})
    Animated.spring(this.state.rotate,
     {
        toValue: Number(!this.state.isFlipped),
        useNativeDriver: true
      }
    ).start(() => {})
  }

  renderBackCard = () => {
    return (
      <View style={{height: this.props.height, width: this.props.width, transform: [{scaleX: -1}], borderRadius: 5, borderWidth: 0.5, borderColor: '#4B419A', justifyContent: 'center', alignItems: 'center'}}>
        <Text>Back{this.props.text}</Text>
      </View>   
    )
  }

  renderFrontCard = () => {
    return (
      <View style={{ height: this.props.height, width: this.props.width, borderRadius: 5, borderWidth: 0.5, borderColor: '#4B419A', justifyContent: 'center', alignItems: 'center', backgroundColor: '#4B419A'}}>
      </View>
    )
  }

  render () {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => this._animation()}
      >
        <Animated.View
          style={[
            {
              transform: [
                {rotateY: this.state.rotate.interpolate({
                  inputRange: [0, 1],
                  outputRange: [ '0deg', '180deg' ]
                })}
            ],
              marginRight: 10
            },
          ]}
        >
          {this.state.isFlipped && this.renderBackCard()}
          {!this.state.isFlipped && this.renderFrontCard()}
        </Animated.View>
      </TouchableOpacity>
    )
  }
}

export default Card;
