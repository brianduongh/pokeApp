import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image,
} from 'react-native';

import pokeBowl from '../../images/sushi.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  greeting: {
    textAlign: 'center',
    fontFamily: 'Merci Heart Brush',
    fontSize: 60,
    marginTop: 150,
  },
});

class Loading extends Component {
  state = {
    greeting: "Tim's Poke",
  }

  render() {
    const { greeting } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.greeting}>
          {greeting}
        </Text>
        <Image source={pokeBowl} />
      </View>
    );
  }
}

export default Loading;
