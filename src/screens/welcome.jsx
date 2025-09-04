import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Dimensions,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const backgroundimage = require("../assets/images/welcomebanner.png");
const logo = require("../assets/images/logo.png");

const { width: screenWidth } = Dimensions.get("window");

const Welcome = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={true} />

      <ImageBackground
        source={backgroundimage}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          colors={[
            "rgba(255,255,255,0.01)",
            "rgba(242,241,255,1)",
            "rgba(242,241,255,1)",
          ]}
          start={[0, 0]}
          end={[0, 1]}
          style={styles.lineargradient}
        >
          <View className="w-full items-center space-y-5 gap-5 mb-[-40]">
            <View className="items-center">
              <View className="flex-row items-center space-x-4">
                <Image className="h-18 w-18" source={logo} />
                <Text className="text-primarypurple text-3xl font-Quicksandbold">
                  MediCare
                </Text>
              </View>
              <Text className="text-gray-500 font-Quicksandmedium text-center text-sm mt-2">
                Create an account in minutes to access exclusive features, track
                your identity and stay updated.
              </Text>
            </View>
            <View className="w-full items-center">
              <TouchableOpacity className="h-15 w-full max-w-[90%] bg-primarypurple rounded-2xl items-center justify-center py-4">
                <Text className="text-white text-lg font-QuicksandBold">
                  Get Started
                </Text>
              </TouchableOpacity>
              <View className="flex-row gap-2">
                <TouchableOpacity>
                  <Text className="text-black font-Quicksandbold text-center text-sm mt-4">
                    © 2025 MediCare.
                  </Text>
                </TouchableOpacity>
                <Text className="text-black font-Quicksandmedium text-center text-sm mt-4">
                  All Rights Reserved.
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  lineargradient: {
    position: "absolute",
    bottom: 20,
    width: screenWidth,
    height: 274,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 2 },
    marginBottom: -20,
  },
});
