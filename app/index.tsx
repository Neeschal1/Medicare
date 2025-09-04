import { View, Text } from "react-native";
import "../global.css";
import Welcome from "../src/screens/welcome";
import { useFonts } from "expo-font";
import { customFonts } from "../src/utils/fontsconfig";

export default function Index() {
  const [fontsLoaded] = useFonts(customFonts);

  return (
    <View className="flex-1">
      <Welcome />
    </View>
  );
}
