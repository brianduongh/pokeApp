import React, { Component } from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class Menu extends Component {
  state = {
    greeting: 'Menu',
  }

  render() {
    const { greeting } = this.state;
    return (
      <View style={styles.container}>
        <Text>
          {greeting}
        </Text>
      </View>
    );
  }
}

export default Menu;
