import * as React from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PropsScreen from "./examples/props";
import InfoScreen from "./examples/info";
import StateScreen from "./examples/state";
import TextInputScreen from "./examples/textInput";
import ScrollViewScreen from "./examples/scrollView";
import HttpViewScreen from "./examples/http";
import FlexDirectionScreen from "./examples/layout-flexDirection";
import justifyContentScreen from "./examples/layout-justifyContent";
import alignItemsScreen from "./examples/layout-AllignItems";
import FlatListScreen from "./examples/flatList";
import SectionlistScreen from "./examples/SectionList";
import TouchableHighlightScreen from "./examples/touchableHighlight";
import TouchableOpacityScreen from "./examples/touchableOpacity";
import pickingPhoto from "./examples/pickingPhoto";
import sharingPhoto from "./examples/sharingPhoto";

var styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'center',
    alignItems: "stretch",
  },
  button: {
    alignItems: "center",
    backgroundColor: '#fff',
    padding: 5,
    opacity: 0.3
  },
  buttonText: {
    fontSize: 25,
    color: 'black',
  }
});

function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/background.gif")}
      style={styles.container}
    >
      <View style={styles.container} >
        
        <ScrollView>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Info")}
          >
            <Text style={styles.buttonText}>What to do with this code</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            title="Go to Props Demo "
            onPress={() => navigation.navigate("Props")}
            color="#000000"
          ><Text style={styles.buttonText}>Go to Props Demo</Text></TouchableOpacity>
          <TouchableOpacity
          style={styles.button}
            title="Go to State Demo "
            onPress={() => navigation.navigate("StateDemo")}
            color="#000000"
          ><Text style={styles.buttonText}>Go to State Demo</Text></TouchableOpacity>
          <TouchableOpacity
          style={styles.button}
            title="Text Input Demo "
            onPress={() => navigation.navigate("TextInputDemo")}
            color="#000000"
          ><Text style={styles.buttonText}>Text Input Demo</Text></TouchableOpacity>
          <View style={{ borderBottomColor: "gray", borderBottomWidth: 1 }} />
          <TouchableOpacity
          style={styles.button}
            title="TouchableHighlight Demo"
            onPress={() => navigation.navigate("TouchableHighlightDemo")}
            color="#000000"
          ><Text style={styles.buttonText}>TouchableHighlight Demo</Text></TouchableOpacity>
          <TouchableOpacity
          style={styles.button}
            title="TouchableOpacity Demo"
            onPress={() => navigation.navigate("TouchableOpacityDemo")}
            color="#000000"
          ><Text style={styles.buttonText}>TouchableOpacity Demo</Text></TouchableOpacity>
          <View style={{ borderBottomColor: "gray", borderBottomWidth: 1 }} />
          <TouchableOpacity
          style={styles.button}
            title="Flex Direction Demo "
            onPress={() => navigation.navigate("FlexDirectionDemo")}
            color="#000000"
          ><Text style={styles.buttonText}>Flex Direction Demo</Text></TouchableOpacity>
          <TouchableOpacity
          style={styles.button}
            title="Justify Content Demo "
            onPress={() => navigation.navigate("justifyContentDemo")}
            color="#000000"
          ><Text style={styles.buttonText}>Justify Content Demo</Text></TouchableOpacity>
          <TouchableOpacity
          style={styles.button}
            title="Align Items Demo "
            onPress={() => navigation.navigate("AlignItemsDemo")}
            color="#000000"
          ><Text style={styles.buttonText}>Align Items Demo</Text></TouchableOpacity>
          <View style={{ borderBottomColor: "gray", borderBottomWidth: 1 }} />
          <TouchableOpacity
          style={styles.button}
            title="Go to Scroll Demo "
            onPress={() => navigation.navigate("ScrollDemo")}
            color="#000000"
          ><Text style={styles.buttonText}>Go to Scroll Demo</Text></TouchableOpacity>
          <TouchableOpacity
          style={styles.button}
            title="Go to Flatlist Demo "
            onPress={() => navigation.navigate("FlatlistDemo")}
            color="#000000"
          ><Text style={styles.buttonText}>Go to Flatlist Demo</Text></TouchableOpacity>
          <TouchableOpacity
          style={styles.button}
            title="Go to SectionList Demo "
            onPress={() => navigation.navigate("SectionListDemo")}
            color="#000000"
          ><Text style={styles.buttonText}>Go to SectionList Demo</Text></TouchableOpacity>
          <TouchableOpacity
          style={styles.button}
            title="Go to Fetch Demo "
            onPress={() => navigation.navigate("FetchDemo")}
            color="#000000"
          ><Text style={styles.buttonText}>Go to Fetch Demo</Text></TouchableOpacity>
          <View style={{ borderBottomColor: "gray", borderBottomWidth: 1 }} />
          <TouchableOpacity
          style={styles.button}
            title="Go to Pick Photo Demo "
            onPress={() => navigation.navigate("PickPhotoDemo")}
            color="#000000"
          ><Text style={styles.buttonText}>Go to Pick Photo Demo</Text></TouchableOpacity>
          <TouchableOpacity
          style={styles.button}
            title="Go to Share Photo Demo "
            onPress={() => navigation.navigate("SharingPhotoDemo")}
            color="#000000"
          ><Text style={styles.buttonText}>Go to Share Photo Demo</Text></TouchableOpacity>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "All Examples" }}
        />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Props" component={PropsScreen} />
        <Stack.Screen name="StateDemo" component={StateScreen} />
        <Stack.Screen name="TextInputDemo" component={TextInputScreen} />
        <Stack.Screen
          name="TouchableHighlightDemo"
          component={TouchableHighlightScreen}
        />
        <Stack.Screen
          name="TouchableOpacityDemo"
          component={TouchableOpacityScreen}
        />
        <Stack.Screen
          name="FlexDirectionDemo"
          component={FlexDirectionScreen}
        />
        <Stack.Screen
          name="justifyContentDemo"
          component={justifyContentScreen}
        />
        <Stack.Screen name="AlignItemsDemo" component={alignItemsScreen} />
        <Stack.Screen name="ScrollDemo" component={ScrollViewScreen} />
        <Stack.Screen name="FlatlistDemo" component={FlatListScreen} />
        <Stack.Screen name="SectionListDemo" component={SectionlistScreen} />
        <Stack.Screen name="FetchDemo" component={HttpViewScreen} />
        <Stack.Screen name="PickPhotoDemo" component={pickingPhoto} />
        <Stack.Screen name="SharingPhotoDemo" component={sharingPhoto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
