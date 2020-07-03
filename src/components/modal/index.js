import React from 'react';
import { TouchableOpacity, Modal as RNModal, View, Text } from 'react-native';

class Modal extends React.PureComponent {
  render() {
    const { visible, status, level, moves, score } = this.props;
    return (
      <RNModal transparent={ true } visible={ visible }>
        <View
          style={ {
            backgroundColor: '#000000aa',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          } }>
            <View style={{marginHorizontal: 20, borderRadius: 5, elevation: 3, backgroundColor: 'white', width: '90%', padding: 20}}>
              {status === 'success' ? (
                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{color: '#4B419A', fontSize: 24, fontWeight: 'bold'}}>Congratulations!</Text>
                  <Text style={{paddingVertical: 10}}>You have completed this level {level} in {moves} moves</Text>
                  <Text style={{paddingVertical: 10}}>Your Score: {score}</Text>
                  <TouchableOpacity style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#4B419A', borderRadius: 5, marginVertical: 10}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white'}}>Procced</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{color: '#ff1e46', fontSize: 24, fontWeight: 'bold'}}>Failure!</Text>
                  <Text style={{paddingVertical: 10}}>Try again this level to procced to next level</Text>
                  <TouchableOpacity style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#ff1e46', borderRadius: 5, marginVertical: 10}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white'}}>Retry</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
        </View>
      </RNModal>
    )
  }
}

export default Modal;
