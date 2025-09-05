import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/welcome";
import Login from "../screens/login";
import Signup from "../screens/signup";
import Doctorwelcome from "../screens/doctorwelcome";
import Idcreated from "../screens/idcreated";
import Profilesetup from "../screens/profilesetup";
import DrawerNavigation from "./DrawerNavigation";

const Stack = createNativeStackNavigator();

const Stacknavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: true,
          title: " ",
          headerTransparent: true,
          animation: "slide_from_right",
          headerStyle: { backgroundColor: "transparent", height: 120 },
          headerTintColor: "#fff",
          headerTitleStyle: { fontSize: 24, fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: true,
          title: " ",
          headerTransparent: true,
          animation: "slide_from_right",
          headerStyle: { backgroundColor: "transparent", height: 120 },
          headerTintColor: "#ffffff",
          headerTitleStyle: { fontSize: 24, fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: true,
          title: " ",
          headerTransparent: true,
          headerStyle: { backgroundColor: "transparent", height: 120 },
          headerTintColor: "#000000",
          animation: "fade",
          headerTitleStyle: { fontSize: 24, fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="Doctorwelcome"
        component={Doctorwelcome}
        options={{
          headerShown: false,
          title: " ",
          headerTransparent: true,
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="Idcreated"
        component={Idcreated}
        options={{
          headerShown: true,
          title: " ",
          headerTransparent: true,
          headerStyle: { backgroundColor: "transparent", height: 120 },
          headerTintColor: "#000000",
          animation: "fade",
          headerTitleStyle: { fontSize: 24, fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="Profilesetup"
        component={Profilesetup}
        options={{
          headerShown: true,
          title: " ",
          headerTransparent: true,
          headerStyle: { backgroundColor: "transparent", height: 120 },
          headerTintColor: "#000000",
          animation: "fade",
          headerTitleStyle: { fontSize: 24, fontWeight: "bold" },
        }}
      />

      <Stack.Screen
        name="HomeDrawer"
        component={DrawerNavigation}
        options={{
          headerShown: false, 
        }}
      />
    </Stack.Navigator>
  );
};

export default Stacknavigation;
