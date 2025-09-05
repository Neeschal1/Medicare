import React from "react";
import "../global.css";
import Stacknavigation from "../src/constants/stacknavigation";
import { useFonts } from "expo-font";
import { customFonts } from "../src/utils/fontsconfig";
import 'react-native-gesture-handler';

export default function Index() {
  const [fontsLoaded] = useFonts(customFonts);
  if (!fontsLoaded) return null;

  return <Stacknavigation />; // ✅ No NavigationContainer here
}
