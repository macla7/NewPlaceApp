import React, { useState } from "react";
import { View } from "react-native";
import { Text, Button, TextInput, Chip, useTheme } from "react-native-paper";

function Login({ navigation }) {
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const { colors } = useTheme();

  return (
    <View>
      <View
        style={{
          paddingTop: 60,
          paddingBottom: 100,
          maxWidth: 500,
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      >
        <View
          style={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text variant="headlineLarge">Welcome Back</Text>
          <Text variant="titleSmall">
            Log In to your Placoo account to explore your dream place to live
            across the whole world!
          </Text>
        </View>

        <TextInput
          label="Username"
          value={username}
          mode="outlined"
          style={{ marginTop: 30 }}
          outlineStyle={{ borderRadius: 100 }}
          onChangeText={(text) => setUsername(text)}
        />

        <TextInput
          label="Password"
          value={password}
          mode="outlined"
          style={{ marginTop: 30 }}
          outlineStyle={{ borderRadius: 100 }}
          onChangeText={(text) => setPassword(text)}
        />

        <Button
          style={{ marginTop: 30 }}
          mode="contained"
          onPress={() => {
            alert("Not implemented yet");
          }}
        >
          Log in
        </Button>

        <Button mode="text" onPress={() => navigation.navigate("Login")}>
          Forgot Password
        </Button>

        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <Chip
            style={{ backgroundColor: colors.primaryContainer }}
            textStyle={{ color: colors.onPrimaryContainer }}
          >
            OR
          </Chip>
        </View>

        <Button
          style={{ marginTop: 30 }}
          mode="contained"
          buttonColor="#000"
          textColor="#fff"
          onPress={() => {
            alert("Not implemented yet");
          }}
        >
          Sign in with Apple
        </Button>

        <Button
          style={{ marginTop: 30 }}
          mode="contained"
          buttonColor="#fff"
          textColor="#000"
          onPress={() => {
            alert("Not implemented yet");
          }}
        >
          Sign in with Google
        </Button>
      </View>
    </View>
  );
}

export default Login;
