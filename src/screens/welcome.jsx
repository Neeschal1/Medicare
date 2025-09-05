import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeIn, FadeOut, FadeInUp, FadeInDown } from 'react-native-reanimated';

const backgroundimage = require("../assets/images/welcomebanner.png");
const logo = require("../assets/images/logo.png");

const { width: screenWidth } = Dimensions.get("window");

const Welcome = () => {
  const navigation = useNavigation();

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
          end={[0, 0.5]}
          style={styles.lineargradient}
        >
          <View className="w-full items-center space-y-5 gap-5">
            <View className="items-center">
              <Animated.View entering={FadeInUp.delay(200).duration(1000).springify()} className="flex-row items-center space-x-5">
                <Image className="h-10 w-10" source={logo} />
                <Text className="max-w-[220px] text-primarypurple text-3xl font-Quicksandbold">
                  MediCare
                </Text>
              </Animated.View>
              <Animated.Text entering={FadeInUp.delay(400).duration(1000).springify()} className="text-gray-500 font-Quicksandmedium text-center text-sm mt-2 mx-3.5">
                Create an account in minutes to access exclusive features, track
                your identity and stay updated.
              </Animated.Text>
            </View>

            <View className="w-full items-center">
              <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="w-full items-center gap-3">
                <TouchableOpacity
                  onPress={() => navigation.navigate("Login")}
                  className="h-15 w-full max-w-[90%] rounded-2xl items-center justify-center py-4 border-primarypurple border"
                >
                  <Text className="text-primarypurple text-xl font-Quicksandbold">
                    Login
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Doctorwelcome")}
                  className="h-15 w-full max-w-[90%] bg-primarypurple rounded-2xl items-center justify-center py-4"
                >
                  <Text className="text-white text-xl font-Quicksandbold">
                    Signup
                  </Text>
                </TouchableOpacity>
              </Animated.View>

              <TouchableOpacity>
                <Text className="text-black max-w-[300px] font-Quicksandbold text-center text-sm mt-4">
                  © 2025 MediCare. All Rights Reserved.
                </Text>
              </TouchableOpacity>
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
    height: 320,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 2 },
    marginBottom: -20,
    paddingTop: 40
  },
});
