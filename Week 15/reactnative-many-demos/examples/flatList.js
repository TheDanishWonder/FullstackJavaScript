import React from 'react';
import { FlatList, StyleSheet, View, Text, ImageBackground } from 'react-native';


export default FlatListBasics = () => {
  return (
    <ImageBackground
    source={require("../assets/background.gif")}
    style={styles.container}
  >
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
container: {
 flex: 1,
 paddingTop: 22,
 alignItems: 'center',
},
item: {
  padding: 10,
  fontSize: 18,
  height: 44,
},
})