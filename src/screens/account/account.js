import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container, Header, Body, Title, Left, Right, ListItem,
  List, Text, Content, Icon, Button, Thumbnail, H1, H2,
} from 'native-base';

import Brian from '../../images/brianD1.jpg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  thumbnail: {
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'center',
  },
  button: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  h1: {
    alignSelf: 'center',
    fontSize: 20,
  },
  h2: {
    alignSelf: 'center',
    marginBottom: 20,
    fontSize: 10,
  },
});

class Account extends Component {
  state = {
    TopHeader: 'Account',
    User: 'Brian Duong',
    Email: 'brianduongh@gmail.com',
  }

  render() {
    const { TopHeader, User, Email } = this.state;
    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>{TopHeader}</Title>
          </Body>
        </Header>
        <Content>
          <Thumbnail style={styles.thumbnail} large source={Brian} />
          <Text style={styles.h1}>{User}</Text>
          <Text style={styles.h2}>{Email}</Text>
          <List>
            <ListItem>
              <Left>
                <Text>Edit Profile</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Management payment methods</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Customer support</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Transaction history</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Settings</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
          <Button style={styles.button} rounded block light>
            <Text>Sign out</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Account;
