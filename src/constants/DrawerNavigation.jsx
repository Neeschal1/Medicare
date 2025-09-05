import React from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Home from "../screens/home";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const Drawer = createDrawerNavigator();
const { width: SCREEN_WIDTH } = Dimensions.get("window");

// Half-screen drawer
export const DRAWER_WIDTH = SCREEN_WIDTH * 0.4;

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ flex: 1/2, backgroundColor: "#1f2937", paddingHorizontal: 10 }}
    >
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={{ uri: "https://i.pinimg.com/736x/aa/5d/c6/aa5dc6ee57c1ddbc7979a3de662f1f38.jpg" }}
        />
        <Text style={styles.profileName}>Neeschal</Text>
        <Text style={styles.profileSubtitle}>Welcome Back!</Text>
      </View>

      <View style={{ marginTop: 40 }}>
        {["My Profile", "Contacts", "Calls", "Saved Messages", "Settings"].map((label) => (
          <DrawerItem
            key={label}
            label={() => <Text style={{ color: "#fff", fontSize: 18 }}>{label}</Text>}
            onPress={() => {}}
          />
        ))}
      </View>
    </DrawerContentScrollView>
  );
};

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerType="slide"
      overlayColor="transparent"
      drawerStyle={{ width: DRAWER_WIDTH, backgroundColor: "#1f2937" }}
      sceneContainerStyle={{ backgroundColor: "transparent" }} // keep Home visible
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  profileContainer: { paddingVertical: 50, borderBottomWidth: 1, borderBottomColor: "#374151" },
  profileImage: { width: 70, height: 70, borderRadius: 35, marginBottom: 15 },
  profileName: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  profileSubtitle: { color: "#aaa", fontSize: 14 },
});
