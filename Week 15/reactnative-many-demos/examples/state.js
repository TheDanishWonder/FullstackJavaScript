import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from "react-native";

Cafe = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});

//https://reactnative.dev/docs/touchableopacity
export default function StateScreen() {
  return (
    <ImageBackground
        source={require("../assets/background.gif")}
        style={styles.container}
      >
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:24}}>State Demo</Text>
      <Cafe />
    </View>
    </ImageBackground>
  );
}

