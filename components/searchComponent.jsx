import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderComponent from './header';
import Map from './map'
import { SearchBar } from 'react-native-elements'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  }, 
  searBar : {
    width: 50,
    padding:20
  }
});

export default  SearchComponent = (props) =>  (
        <View style={styles.container}>
        <HeaderComponent />
        <SearchBar  lightTheme icon={{ type: 'font-awesome', name: 'search' }}  containerStyle={{
            backgroundColor: "#4C525A",
            justifyContent: 'space-around',
          }} />
        <Map />
        </View>
      );
