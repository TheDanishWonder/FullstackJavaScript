import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const Login = (props) => {
  const username = (username) => {
    props.setCredentials({
      password: props.credentials.password,
      userName: username,
    });
  };
  const password = (password) => {
    props.setCredentials({
      userName: props.credentials.userName,
      password: password,
    });
  };

  return (
    <Modal visible={props.visible} animationType="fade" transparent={true}>
      <View style={styles.container}>
        <TextInput
          placeholder="Set UserName"
          style={styles.inputBox}
          value={props.credentials.userName}
          onChangeText={username}
        />
        <TextInput
          placeholder="Set Password"
          style={styles.inputBox}
          value={props.credentials.password}
          onChangeText={password}
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
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 250,
    marginTop: 200,
  },
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
