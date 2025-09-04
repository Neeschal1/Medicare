// app/_layout.tsx
import { View } from "react-native";
import { Slot } from "expo-router";

export default function Layout() {
  return (
    <View className="flex-1 bg-white">
      <Slot />  {/* renders pages like index.tsx */}
    </View>
  );
}
