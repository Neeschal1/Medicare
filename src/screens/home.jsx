import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { useDrawerProgress } from "@react-navigation/drawer";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Home = () => {
  const navigation = useNavigation();
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => {
    if (!progress) return {};

    const scale = interpolate(progress.value, [0, 1], [1, 0.85]);
    const translateX = interpolate(progress.value, [0, 1], [0, SCREEN_WIDTH * 0.95]);
    const borderRadius = interpolate(progress.value, [0, 1], [0, 20]);

    return {
      transform: [{ scale }, { translateX }],
      borderRadius,
      overflow: "hidden",
    };
  });

  return (
    <View style={{ flex: 1, backgroundColor: "#1f2937" }}>
      <Animated.View style={[{ flex: 1, backgroundColor: "#fff" }, animatedStyle]}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Image
                style={styles.avatar}
                source={{ uri: "https://i.pinimg.com/736x/aa/5d/c6/aa5dc6ee57c1ddbc7979a3de662f1f38.jpg" }}
              />
            </TouchableOpacity>
            <View style={{ justifyContent: "center" }}>
              <Text style={styles.greeting}>Hi, Neeschal!</Text>
              <Text style={styles.subGreeting}>So good to see you.</Text>
            </View>
          </View>

          <View style={{ marginTop: 40 }}>
            <Text style={styles.contentText}>Your main content goes here...</Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, paddingHorizontal: 20 },
  header: { flexDirection: "row", alignItems: "center", gap: 12 },
  avatar: { width: 60, height: 60, borderRadius: 30 },
  greeting: { fontSize: 24, fontWeight: "700", color: "#000" },
  subGreeting: { fontSize: 18, color: "#555" },
  contentText: { fontSize: 16, color: "#333" },
});
