import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container, Header, Body, Title, Text, Content,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  points: {
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 70,
    fontWeight: 'bold',
    fontSize: 100,
  },
  pointSub: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    alignSelf: 'center',
  },
  pointsEarned: {
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 30,
    fontWeight: 'bold',
  },
  number: {
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 35,
    marginTop: 20,
    marginBottom: 70,
  },
});

class Rewards extends Component {
  state = {
    TopHeader: 'Rewards',
    Points: '1000',
  }

  render() {
    const { TopHeader, Points } = this.state;
    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>{TopHeader}</Title>
          </Body>
        </Header>
        <Content>
          <Grid>
            <Row>
              <Col style={{ height: 400, backgroundColor: '#98F5FF', borderBottomWidth: 5 }}>
                <Text style={styles.points}>{Points}</Text>
                <Text style={styles.pointSub}>Available Points</Text>
              </Col>
            </Row>
            <Row style={{ backgroundColor: '#f2d2a9', flex: 5 }}>
              <Col style={{ borderRightWidth: 1 }}>
                <Text style={styles.pointsEarned}>Total points earned</Text>
                <Text style={styles.number}>0</Text>
              </Col>
              <Col style={{ borderLeftWidth: 5 }}>
                <Text style={styles.pointsEarned}>Points to Silver status</Text>
                <Text style={styles.number}>1000</Text>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

export default Rewards;
