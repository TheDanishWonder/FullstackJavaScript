import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View, StyleSheet, ImageBackground} from "react-native";

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

async function getMoviesFromApiAsync() {
  try {
    let response = await fetch("https://reactnative.dev/movies.json");
    let json = await response.json();
    return json.movies;
  } catch (error) {
    console.error(error);
  }
}

FetchDemo = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getMoviesFromApiAsync().then((data) => setData(data));
    return () => {
      setLoading(false);
    };
  });

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text style={styles.item}>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
};

//https://reactnative.dev/docs/network
export default function HttpViewScreen() {
  return (
    <ImageBackground
    source={require("../assets/background.gif")}
    style={styles.container}
  >
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24 }}>Fetch Demo</Text>
      <FetchDemo />
    </View>
    </ImageBackground>
  );
}
