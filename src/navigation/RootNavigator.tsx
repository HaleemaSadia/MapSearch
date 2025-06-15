import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/Home/Home';
import { RootStackParamList } from './types';
import MapScreen from '../screens/MapScreen/MapScreen';
import { Image, StyleSheet, View } from 'react-native';
import { location } from '../utils/assets/images';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#292929',
  },
};

const headerImage = () => {
  return (
  <Image source={location} style={styles.headerIcon} />
  )
};
const RootNavigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Location Finder',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 18,
              color: '#FFFFFF',
            },
            headerStyle:{
              backgroundColor:"#30302e"
            },
            headerTitleAlign: 'center',
            headerLeft: headerImage,
          }}
        />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
           options={{
            title: 'Location',
            headerTintColor: '#ccc', 
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#FFFFFF',
            },
             headerStyle:{
              backgroundColor:"#30302e"
            },

            headerBackButtonDisplayMode:"minimal",
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerIcon: {
    height: 40,
    width: 40,
    marginTop: 3,
  },
  headerBackButton:{
    color:"#292929",
    height:20,
    width:20
  }
});

export default RootNavigator;

