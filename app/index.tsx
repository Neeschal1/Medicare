import { View, Text } from "react-native";
import "../global.css";
import Stacknavigation from "../src/constants/stacknavigation";
import { useFonts } from "expo-font";
import { customFonts } from "../src/utils/fontsconfig";
import { useNavigation } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";

export default function Index() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts(customFonts);

  return (
    <View className="flex-1">
      <Stacknavigation />
    </View>
  );
}
