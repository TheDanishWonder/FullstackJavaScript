import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Dimensions } from "react-native";

const SCREEN_WIDTH = Math.round(Dimensions.get('window').width); 
const SCREEN_HEIGHT = Math.round(Dimensions.get('window').height);

const Login = (props) => {
  const username = (username) => {
    props.setCredentials({
      latitude: props.credentials.latitude,
      longitude: props.credentials.longitude,
      password: props.credentials.password,
      userName: username,
    });
  };
  const password = (password) => {
    props.setCredentials({
      latitude: props.credentials.latitude,
      longitude: props.credentials.longitude,
      userName: props.credentials.userName,
      password: password,
    });
  };
  const latitude = (latitude) => {
    props.setCredentials({
      userName: props.credentials.userName,
      password: props.credentials.password,
      longitude: props.credentials.longitude,
      latitude: latitude,
    });
  };
  const longitude = (longitude) => {
    props.setCredentials({
      userName: props.credentials.userName,
      password: props.credentials.password,
      latitude: props.credentials.latitude,
      longitude: longitude,
    });
  };

  return (
    <Modal visible={props.visible} animationType="fade" transparent={true}>
      <View style={{Height: SCREEN_HEIGHT, marginTop: SCREEN_HEIGHT - 650, justifyContent: 'center',
    alignItems: 'center'}}> 
        <TextInput
          placeholder="Set UserName"
          style={styles.inputBox}
          value={props.credentials.userName}
          onChangeText={username}
        />
        <TextInput
          placeholder="Set Password"
          secureTextEntry={true}
          textContentType="password"
          style={styles.inputBox}
          value={props.credentials.password}
          onChangeText={password}
        />
                <TextInput
          placeholder="Set Latitude"
          keyboardType='numbers-and-punctuation'
          style={styles.inputBox}
          value={`${props.credentials.latitude}`}
          onChangeText={latitude}
        />
                <TextInput
          placeholder="Set Longtitude"
          keyboardType='numbers-and-punctuation'
          style={styles.inputBox}
          value={`${props.credentials.longitude}`}
          onChangeText={longitude}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.loginButton}>
            <Button title="Log in" onPress={props.closeLogin} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: "rgba(255,255,255,0.8)",
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10,
    borderRadius: 25,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  loginButton: {
    borderBottomColor: "black",
    borderWidth: 1,
    backgroundColor: "rgba(255,255,255,0.5)",
    width: "20%",
    borderRadius: 25,
  },
});

export default Login;
