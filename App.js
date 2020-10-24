import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

//import screens
// import Single1 from './screens/Single1';
// import Single2 from './screens/Single2';
// import Stack1 from './screens/Stack1';
// import Stack2 from './screens/Stack2';
import Tab1 from './screens/Tab1';
import Tab2 from './screens/Tab2';

//stack
// const Stack = createStackNavigator(
//   {
//     Stack1: { screen: Stack1 },
//     Stack2: { screen: Stack2 },
//   },
//   {
//     initialRouteName: 'Stack1',
//   }
// );

//Tab
const Tab = createBottomTabNavigator({
  Tab1: { screen: Tab1 },
  Tab2: { screen: Tab2 },
});

class App extends React.Component {
  render() {
    //AppContainerでラップ
    const Layout = createAppContainer(Tab);
    return <Layout />;
  }
}

export default App;
