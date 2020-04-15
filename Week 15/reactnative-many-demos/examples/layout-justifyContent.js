import React from 'react';
import { View, Text, ImageBackground, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   alignItems: 'center',
  }})

JustifyContentBasics = () => {
  return (
    // Try setting `justifyContent` to `center`.
    // Try setting `flexDirection` to `row`.
    <View style={{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    }}>
      <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
    </View>
  );
};


//https://reactnative.dev/docs/flexbox#justify-content
export default function JustifyContentScreen() {
  return (
    <ImageBackground
    source={require("../assets/background.gif")}
    style={styles.container}
  >
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Justify Content</Text>
      <JustifyContentBasics />
    </View>
    </ImageBackground>
  );
}