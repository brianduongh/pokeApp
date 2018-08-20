import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container, Header, Body, Title, Left, Right, ListItem,
  List, Text, Content, Thumbnail,
} from 'native-base';

import AhiBowl from '../../images/AhiBowl.jpg';
import SalmonBowl from '../../images/SalmonSashimi.jpg';
import ShoyuAhiBowl from '../../images/ShoyuAhiPoke.jpg';
import MaguroBowl from '../../images/MaguroSashimiBowl.jpg';
import AhiSalad from '../../images/SpicyAhiSalad.jpg';
import SalmonSalad from '../../images/SalmonSashimiSalad.jpg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  thumbnail: {
    marginRight: 50,
  },
});

class Menu extends Component {
  state = {
    TopHeader: 'Menu',
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
          <List>
            <ListItem>
              <Left>
                <Thumbnail source={AhiBowl} style={styles.thumbnail} />
                <Text>Spicy Ahi Poke Bowl</Text>
              </Left>
              <Right>
                <Text>$7.00</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Thumbnail source={SalmonBowl} style={styles.thumbnail} />
                <Text>Salmon Sashimi Bowl</Text>
              </Left>
              <Right>
                <Text>$7.00</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Thumbnail source={ShoyuAhiBowl} style={styles.thumbnail} />
                <Text>Shoyu Ahi Poke Bowl</Text>
              </Left>
              <Right>
                <Text>$7.00</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Thumbnail source={MaguroBowl} style={styles.thumbnail} />
                <Text>Maguro Sashimi Bowl</Text>
              </Left>
              <Right>
                <Text>$7.00</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Thumbnail source={AhiSalad} style={styles.thumbnail} />
                <Text>Spicy Ahi Salad</Text>
              </Left>
              <Right>
                <Text>$7.00</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Thumbnail source={SalmonSalad} style={styles.thumbnail} />
                <Text>Salmon Sashimi Salad</Text>
              </Left>
              <Right>
                <Text>$7.00</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default Menu;
