import React from 'react';
import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import Menu from './screens/menu';
import Rewards from './screens/rewards';
import Scan from './screens/scan';
import Account from './screens/account';
import Order from './screens/order';
import Loading from './screens/loading';

const HomeNavigator = createBottomTabNavigator({
  Menu: {
    screen: Menu,
    navigationOptions: {
      tabBarLabel: 'Menu',
      tabBarIcon: () => <Icon name="ios-restaurant" />,
    },
  },
  Rewards: {
    screen: Rewards,
    navigationOptions: {
      tabBarLabel: 'Rewards',
      tabBarIcon: () => <Icon name="ios-star" />,
    },
  },
  Scan: {
    screen: Scan,
    navigationOptions: {
      tabBarLabel: 'Scan',
      tabBarIcon: () => <Icon name="ios-qr-scanner" />,
    },
  },
  Account: {
    screen: Account,
    navigationOptions: {
      tabBarLabel: 'Account',
      tabBarIcon: () => <Icon name="ios-person" />,
    },
  },
  Order: {
    screen: Order,
    navigationOptions: {
      tabBarLabel: 'Order',
      tabBarIcon: () => <Icon name="ios-menu" />,
    },
  },
});

export const RootNavigator = createSwitchNavigator(
  {
    Loading,
    HomeNavigator,
  },
  {
    initialRouteName: 'Loading',
  },
);

export default HomeNavigator;
