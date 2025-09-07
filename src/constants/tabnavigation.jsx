// /src/navigation/MyTabs.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Screens
import Home from "../screens/home";
import Hospitaldetails from "../screens/hospitaldetails";
import Notifications from "../screens/notifications";
import Chatty from "../screens/chatty";
import Profile from "../screens/profile";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 5,
          top: 10,
          paddingTop: 5
        },
      }}
    >
      {/* Home */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
           <View style={{ alignItems: "center" }}>
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={focused ? "#0055FF" : "#777"}
              />
              <Text className="font-Quicksandmedium" style={{ color: focused ? "#0055FF" : "#777", fontSize: 9 }}>
                Home
              </Text>
            </View>
          ),
        }}
      />

      {/* Hospitals */}
      <Tab.Screen
        name="Hospitals"
        component={Hospitaldetails}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <Ionicons
                name={focused ? "medkit" : "medkit-outline"}
                size={24}
                color={focused ? "#0055FF" : "#777"}
              />
              <Text className="font-Quicksandmedium" style={{ color: focused ? "#0055FF" : "#777", fontSize: 8 }}>
                Doctors
              </Text>
            </View>
          ),
        }}
      />

      {/* Center Button */}
      <Tab.Screen
        name="Center"
        component={Notifications}
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={{
                top: -25,
                justifyContent: "center",
                alignItems: "center",
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: "#0055FF",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 5,
                elevation: 5,
                left: 10
              }}
            >
              <Ionicons name="call" size={28} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />

      {/* Notifications */}
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <Ionicons
                name={focused ? "notifications" : "notifications-outline"}
                size={24}
                color={focused ? "#0055FF" : "#777"}
              />
              <Text style={{ color: focused ? "#0055FF" : "#777", fontSize: 9 }} className="font-Quicksandmedium">
                Notify
              </Text>
            </View>
          ),
        }}
      />

      {/* Profile */}
      <Tab.Screen
        name="Chatty"
        component={Chatty}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <Ionicons
                name={focused ? "chatbubbles" : "chatbubbles-outline"}
                size={24}
                color={focused ? "#0055FF" : "#777"}
              />
              <Text style={{ color: focused ? "#0055FF" : "#777", fontSize: 9 }} className="font-Quicksandmedium">
                Chatty
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
