import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   alignItems: 'center',
  }})

AlignItemsBasics = () => {
  return (
    // Try setting `flexDirection` to `column`.
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
    </View>
  );
};

//https://reactnative.dev/docs/flexbox#flex-direction
export default function AlignItemsScreen() {
  return (
    <ImageBackground
    source={require("../assets/background.gif")}
    style={styles.container}
  >
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:24}}>Aligh Items</Text>
      <AlignItemsBasics />
    </View>
    </ImageBackground>
  );
}