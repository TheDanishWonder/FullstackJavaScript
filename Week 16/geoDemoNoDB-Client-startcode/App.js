import React, { useState, useEffect, useRef } from "react";
import {
  Platform,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Alert,
  TextInput,
} from "react-native";
import { Icon } from "react-native-elements";
import * as Location from "expo-location";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Constants from "expo-constants";
import facade from "./serverFacade";
import Login from "./components/login";

const MyButton = ({ txt, onPressButton }) => {
  return (
    <TouchableHighlight style={styles.touchable} onPress={onPressButton}>
      <Text style={styles.touchableTxt}>{txt}</Text>
    </TouchableHighlight>
  );
};

export default App = () => {
  //HOOKS
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [errorMessage, setErrorMessage] = useState(null);
  const [gameArea, setGameArea] = useState([]);
  const [region, setRegion] = useState(null);
  const [serverIsUp, setServerIsUp] = useState(false);
  const [status, setStatus] = useState("");
  const [credentials, setCredentials] = useState({
    userName: "t1",
    password: "secret",
  });
  const [login, setLogin] = useState(false);
  const [distance, setDistance] = useState("100000");
  const [otherPlayers, setOtherPlayers] = useState([]);
  let mapRef = useRef(null);

  const closeLogin = () => {
    setLogin(false);
  };

  useEffect(() => {
    getLocationAsync();
  }, []);

  useEffect(() => {
    getGameArea();
  }, []);

  const getCurrentPosition = async () => {
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });

    setPosition({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });

    setRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  const findNearbyPlayers = async () => {
    const positions = await facade.findNearbyPlayers(
      credentials.userName,
      credentials.password,
      position.latitude,
      position.longitude,
      distance
    );
    setOtherPlayers(positions);
  };

  const centerOnRegion = () => {
    if (region) mapRef.current.animateToRegion(region, 1000);
  };

  useEffect(() => {
    centerOnRegion();
  }, [region]);

  async function getGameArea() {
    //Fetch gameArea via the facade, and call this method from within (top) useEffect
    try {
      const area = await facade.fetchGameArea();
      setGameArea(area);
      setServerIsUp(true);
    } catch (err) {
      setErrorMessage("Could not fetch GameArea");
    }
  }

  getLocationAsync = async () => {
    //Request permission for users location, get the location and call this method from useEffect
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setErrorMessage("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });

    setPosition({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });

    setRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  /*
  When a press is done on the map, coordinates (lat,lon) are provided via the event object
  */
  onMapPress = async (event) => {
    //Get location from where user pressed on map, and check it against the server

    const coordinate = event.nativeEvent.coordinate;
    const lon = coordinate.longitude;
    const lat = coordinate.latitude;
    try {
      const status = await facade.isUserInArea(lon, lat);
      showStatusFromServer(setStatus, status);
    } catch (err) {
      Alert.alert("Error", "Server could not be reached");
      setServerIsUp(false);
    }
  };

  onCenterGameArea = () => {
    // (RED) Center map around the gameArea fetched from the backend
    //Hardcoded, should be calculated as center of polygon received from server
    const latitude = 55.777055745928664;
    const longitude = 12.55897432565689;
    mapRef.current.animateToRegion(
      {
        latitude,
        longitude,
        latitudeDelta: 0.002,
        longitudeDelta: 0.04,
      },
      1000
    );
  };

  sendRealPosToServer = async () => {
    const lat = position.latitude;
    const lon = position.longitude;
    try {
      const status = await facade.isUserInArea(lon, lat);
      showStatusFromServer(setStatus, status);
    } catch (err) {
      setErrorMessage("Could not get result from server");
      setServerIsUp(false);
    }
  };

  const info = serverIsUp ? status : " Server is not up";
  return (
    <View style={{ flex: 1, paddingTop: 30, paddingBottom: 0 }}>
      {!region && <Text style={styles.fetching}>.. Fetching data</Text>}

      <Login
        visible={login}
        closeLogin={closeLogin}
        setCredentials={setCredentials}
        credentials={credentials}
      />

      {/* Add MapView */}
      {region && (
        <MapView
          ref={mapRef}
          style={{ flex: 14 }}
          onPress={onMapPress}
          mapType="standard"
          // region={region}
          showsUserLocation
          showsCompass
          style={styles.map}
        >
          {/*App MapView.Polygon to show gameArea*/}
          {serverIsUp && (
            <MapView.Polygon
              coordinates={gameArea}
              strokeWidth={1}
              onPress={onMapPress}
              fillColor="rgba(128, 153, 177, 0.5)"
            />
          )}

          {/*App MapView.Marker to show users current position*/}
          <MapView.Marker
            title="This is your position"
            pinColor="blue"
            coordinate={{
              longitude: position.longitude,
              latitude: position.latitude,
            }}
          />
          {otherPlayers.length > 0 &&
            otherPlayers.map((player, index) => (
              <MapView.Marker
                key={index}
                title={`Position of ${player.name}`}
                coordinate={{
                  longitude: player.lon,
                  latitude: player.lat,
                }}
              />
            ))}
        </MapView>
      )}

      <Text
        style={{
          flex: 3,
          textAlign: "center",
          fontWeight: "bold",
          marginTop: 400,
          backgroundColor: "rgba(0,0,0,0.2)",
        }}
      >
        Players in range: {JSON.stringify(otherPlayers)}
      </Text>
      <Text
        style={{
          flex: 1,
          textAlign: "center",
          fontWeight: "bold",
          backgroundColor: "rgba(0,0,0,0.2)",
        }}
      >
        Your position (lat,long):
      </Text>
      <Text style={styles.text}>
        {position.latitude}, {position.longitude}
      </Text>
      <Text style={styles.text}>{info}</Text>
      <Text style={styles.text}>
        Username: {credentials.userName}, Password: {credentials.password}
      </Text>
      <Text style={styles.text}>Search Radius: {distance}</Text>

      <View
        style={{ flexDirection: "column", backgroundColor: "rgba(0,0,0,0.2)" }}
      >
        <TextInput
          placeholder="Set Distance"
          style={styles.input}
          onChangeText={setDistance}
        />
      </View>
      <View
        style={{ flexDirection: "row", backgroundColor: "rgba(0,0,0,0.2)" }}
      >
        <MyButton
          style={{ flex: 2 }}
          onPressButton={findNearbyPlayers}
          txt="Find Nearby Players"
        />
        <Text>{"          "}</Text>
        <Icon
          raised
          name="location-arrow"
          type="font-awesome"
          color="#f50"
          onPress={getCurrentPosition}
          size={17}
        />
      </View>
      <View
        style={{ flexDirection: "row", backgroundColor: "rgba(0,0,0,0.2)" }}
      >
        <MyButton
          style={{ flex: 2 }}
          onPressButton={sendRealPosToServer}
          txt="Upload Position"
        />

        <MyButton
          style={{ flex: 2 }}
          onPressButton={() => onCenterGameArea()}
          txt="Show Game Area"
        />
      </View>
      <View
        style={{ flexDirection: "column", backgroundColor: "rgba(0,0,0,0.2)" }}
      >
        <MyButton
          style={{ flex: 2 }}
          onPressButton={() => setLogin(true)}
          txt="Login"
        />
      </View>
      <View
        style={{ flexDirection: "column", backgroundColor: "rgba(0,0,0,0.2)" }}
      >
        <Text> </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
  },
  touchable: {
    backgroundColor: "rgba(0,0,0,0.2)",
    margin: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  touchableTxt: {
    fontSize: 22,
    textAlign: "center",
    padding: 5,
    alignItems: "center",
  },

  fetching: {
    fontSize: 35,
    flex: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
  },
  text: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  input: {
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
    width: "94%",
    marginBottom: 10,
    left: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "30%",
    borderRadius: 25,
    alignItems: "center",
  },
});

function showStatusFromServer(setStatus, status) {
  setStatus(status.msg);
  setTimeout(() => setStatus("- - - - - - - - - - - - - - - - - - - -"), 3000);
}
