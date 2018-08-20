import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import {
  Container, Header, Body, Title, Content, Text, H1,
} from 'native-base';

import QRcode from '../../images/QRCode.png';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    marginTop: 80,
    width: 200,
    height: 200,
  },
  h1: {
    alignSelf: 'center',
    marginTop: 50,
  },
  text: {
    alignSelf: 'center',
    marginHorizontal: 50,
    textAlign: 'center',
  },
});

class Scan extends Component {
  state = {
    TopHeader: 'Scan',
  }

  render() {
    const { TopHeader } = this.state;
    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>{TopHeader}</Title>
          </Body>
        </Header>
        <Content>
          <Image source={QRcode} style={styles.image} />
          <H1 style={styles.h1}>Scan to earn points!</H1>
          <Text style={styles.text}>
            You can scan your QR code at the
             register to pay and to earn points toward
             your next reward.
          </Text>
        </Content>
      </Container>
    );
  }
}

export default Scan;
