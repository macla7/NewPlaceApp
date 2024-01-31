import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../onboarding/Login";
import Onboarding from "../onboarding/Onboarding";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

function AuthStackScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {!isLoggedIn ? (
        <Stack.Navigator initialRouteName="Onboarding">
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{
              headerTransparent: true,
              title: "",
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerTransparent: true,
              title: "",
            }}
          />
        </Stack.Navigator>
      ) : (
        // Yet to implement... but just setting up the navigation beyond Auth
        <TabNavigator />
      )}
    </>
  );
}

export default AuthStackScreen;
