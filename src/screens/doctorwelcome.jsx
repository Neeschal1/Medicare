import { View, Text, Dimensions } from "react-native";
import React, { useEffect } from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInUp, FadeInDown } from "react-native-reanimated";

const doctorwelcome = require("../assets/images/doctor.json");

const screenheight = Dimensions.get("window").height;
const screenwidth = Dimensions.get("window").width;

const Doctorwelcome = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Signup");
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 items-center justify-center pb-40 bg-tertiarywhite gap-[-20]">
      <Animated.View
        entering={FadeInUp.delay(200).duration(1000).springify()}
        className="w-full items-center justify-center"
      >
        <LottieView
          style={{
            height: screenheight * 0.4,
            width: screenwidth * 0.7,
          }}
          source={doctorwelcome}
          autoPlay
          loop
        />
      </Animated.View>
      <Animated.View
        entering={FadeInDown.delay(200).duration(1000).springify()}
        className="w-full items-center justify-center"
      >
        <Text className="font-Quicksandbold text-primarypurple text-3xl mt-5">
          Welcome to Medicare
        </Text>
        <Text className="font-Quicksandregular text-grey text-l">
          Connecting You to Care.
        </Text>
      </Animated.View>
    </View>
  );
};

export default Doctorwelcome;
