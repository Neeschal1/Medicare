// DrawerNavigation.js
import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import MyTabs from "./tabnavigation"; // 👈 Import Tabs here
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();
const { width: SCREEN_WIDTH } = Dimensions.get("window");
export const DRAWER_WIDTH = SCREEN_WIDTH * 0.65;

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}
    >
      {/* Profile */}
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://i.pinimg.com/736x/aa/5d/c6/aa5dc6ee57c1ddbc7979a3de662f1f38.jpg",
          }}
        />
        <Text style={styles.profileName}>Neeschal</Text>
        <Text style={styles.profileSubtitle}>Welcome Back 👋</Text>
      </View>

      {/* Drawer Buttons */}
      <TouchableOpacity style={styles.menuItem}>
        <Ionicons name="person-outline" size={22} color="#fff" />
        <Text style={styles.menuText}>My Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Ionicons name="settings-outline" size={22} color="#fff" />
        <Text style={styles.menuText}>Settings</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerType="slide"
      overlayColor="transparent"
      drawerStyle={styles.drawerStyle}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      {/* 👇 Use MyTabs instead of Home */}
      <Drawer.Screen name="MainTabs" component={MyTabs} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1f2937", paddingHorizontal: 20 },
  drawerStyle: {
    width: DRAWER_WIDTH,
    backgroundColor: "#1f2937",
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileContainer: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#374151",
    paddingVertical: 20,
    marginBottom: 20,
  },
  profileImage: { width: 80, height: 80, borderRadius: 40, marginBottom: 10 },
  profileName: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  profileSubtitle: { color: "#aaa", fontSize: 14 },
  menuItem: { flexDirection: "row", alignItems: "center", paddingVertical: 14 },
  menuText: { color: "#fff", fontSize: 16, marginLeft: 15 },
});
