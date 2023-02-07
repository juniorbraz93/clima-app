import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Clima from "../pages/Clima";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Clima"
        component={Clima}
      />
    </Stack.Navigator>
  );
};

export default Routes;
