import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

//import screens
import Single1 from './screens/Single1';
import Single2 from './screens/Single2';
import Stack1 from './screens/Stack1';
import Stack2 from './screens/Stack2';
import Tab1 from './screens/Tab1';
import Tab2 from './screens/Tab2';

//stack
const Stack = createStackNavigator(
  {
    Stack1: { screen: Stack1 },
    Stack2: { screen: Stack2 },
  },
  {
    initialRouteName: 'Stack1',
  }
);

//Tab
const Tab = createBottomTabNavigator({
  Tab1: { screen: Tab1 },
  Tab2: { screen: createStackNavigator({ Tab2: { screen: Tab2 } }) },
});

//drawer
const Drawer = createDrawerNavigator(
  {
    Stacks: { screen: Stack },
    Tabs: { screen: Tab },
    Single1: { screen: Single1 },
    Single2: { screen: Single2 },
  },
  {
    initialRouteName: 'Tabs',
  }
);

class App extends React.Component {
  render() {
    //AppContainerでラップ
    const Layout = createAppContainer(Drawer);
    return <Layout />;
  }
}

export default App;
