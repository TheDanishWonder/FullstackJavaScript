import React, { Component, useState } from 'react';
import { Text, TextInput, View, ImageBackground, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   alignItems: 'center',
  }})

export default function PizzaTranslator() {
  const [text, setText] = useState('');
  return (
    <ImageBackground
        source={require("../assets/background.gif")}
        style={styles.container}
      >
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 100}}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
    </View></ImageBackground>
  );
}