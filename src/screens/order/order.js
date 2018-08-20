import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import {
  Container, Header, Body, Title, Text, Content,
} from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';

import noOrder from '../../images/noOrder.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  noOrder: {
    marginTop: 50,
    marginHorizontal: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

class Order extends Component {
  state = {
    TopHeader: 'My Order',
  }

  render() {
    const { TopHeader } = this.state;
    return (
      <Container style={styles.container}>
        <Header style={{ alignSelf: 'auto' }}>
          <Body>
            <Title>{TopHeader}</Title>
          </Body>
        </Header>
        <Content>
          <Grid style={{ flex: 1 }}>
            <Row style={{
              height: 400, backgroundColor: '#98F5FF', borderBottomWidth: 5, justifyContent: 'center',
            }}
            >
              <Image source={noOrder} style={{ alignSelf: 'center' }} />
            </Row>
            <Row style={{ justifyContent: 'center' }}>
              <Text style={styles.noOrder}>
                You haven't started an order yet! Tap the menu to start ordering
              </Text>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

export default Order;
