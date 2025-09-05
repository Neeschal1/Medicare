import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "../screens/welcome";
import Login from "../screens/login";
import Signup from "../screens/signup";
import Home from "../screens/home";
import Doctorwelcome from "../screens/doctorwelcome";
import Idcreated from "../screens/idcreated";
import Profilesetup from "../screens/profilesetup";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Stacknavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        options={{
          headerShown: true,
          title: " ",
          headerTransparent: true,
          animation: "slide_from_right",
          headerStyle: { backgroundColor: "transparent", height: 120 },
          headerTintColor: "#fff",
          headerTitleStyle: { fontSize: 24, fontWeight: "bold" },
        }}
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: " ",
          headerTransparent: true,
          animation: "slide_from_right",
          headerStyle: { backgroundColor: "transparent", height: 120 },
          headerTintColor: "#ffffff",
          headerTitleStyle: { fontSize: 24, fontWeight: "bold" },
        }}
        name="Login"
        component={Login}
      />
       <Stack.Screen
        options={{
          headerShown: false,
          title: " ",
          headerTransparent: true,
          headerStyle: { backgroundColor: "transparent", height: 120 },
          headerTintColor: "#ffffff",
          animation: "fade",
          headerTitleStyle: { fontSize: 24, fontWeight: "bold" },
        }}
        name="Doctorwelcome"
        component={Doctorwelcome}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: " ",
          headerTransparent: true,
          headerStyle: { backgroundColor: "transparent", height: 120 },
          headerTintColor: "#000000",
          animation: "fade",
          headerTitleStyle: { fontSize: 24, fontWeight: "bold" },
        }}
        name="Signup"
        component={Signup}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: " ",
          headerTransparent: true,
          headerStyle: { backgroundColor: "transparent", height: 120 },
          headerTintColor: "#000000",
          animation: "fade",
          headerTitleStyle: { fontSize: 24, fontWeight: "bold" },
        }}
        name="Idcreated"
        component={Idcreated}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: " ",
          headerTransparent: true,
          headerStyle: { backgroundColor: "transparent", height: 120 },
          headerTintColor: "#000000",
          animation: "fade",
          headerTitleStyle: { fontSize: 24, fontWeight: "bold" },
        }}
        name="Profilesetup"
        component={Profilesetup}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: " ",
          headerTransparent: true,
          headerStyle: { backgroundColor: "transparent", height: 120 },
          headerTintColor: "#000000",
          animation: "slide_from_right",
          headerTitleStyle: { fontSize: 24, fontWeight: "bold" },
        }}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
};

export default Stacknavigation;
