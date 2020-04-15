import React from 'react';
import { Text, View, ImageBackground, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   alignItems: 'center',
  }})

function Cat(props) {
  return (
    <View>
      <Text>Hello, I am {props.name}!</Text>
    </View>
  );
}

export default function Cafe() {
  return (
    <ImageBackground
    source={require("../assets/background.gif")}
    style={styles.container}
  >
    <View>
      <Cat name="Maru" />
      <Cat name="Jellylorum" />
      <Cat name="Ronnie" />
    </View>
    </ImageBackground>
  );
}


