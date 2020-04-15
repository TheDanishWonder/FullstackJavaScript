import React from 'react';
import { Image, ScrollView, Text, View, StyleSheet, ImageBackground} from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 80,
  height: 80
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   alignItems: 'center',
  }})

ScrollDemo = () => (
  <ScrollView>
  <Text style={{ fontSize: 50 }}>Scroll me plz</Text>
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  <Text style={{ fontSize: 50 }}>If you like</Text>
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  <Text style={{ fontSize: 50 }}>Scrolling down</Text>
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  <Text style={{ fontSize: 50 }}>What's the best</Text>
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  <Text style={{ fontSize: 50 }}>Framework around?</Text>
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  <Text style={{ fontSize: 50 }}>React Native</Text>
</ScrollView>
);


export default function ScrollViewScreen() {
  return (
    <ImageBackground
    source={require("../assets/background.gif")}
    style={styles.container}
  >
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Scroll Demo</Text>
      <ScrollDemo />
    </View>
    </ImageBackground>
  );
}