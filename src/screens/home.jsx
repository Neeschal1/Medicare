import React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { useDrawerProgress } from "@react-navigation/drawer";
import Animated, {
  interpolate,
  useAnimatedStyle,
  FadeIn,
  FadeOut,
  FadeInUp,
  FadeInDown,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import Assignments from '../components/home/assignments'
import { ScrollView, TextInput } from "react-native-gesture-handler";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Screenwidth = Dimensions.get("window").width;

const doctor = require("../assets/images/doctorimage.png");

const Home = () => {
  const navigation = useNavigation();
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => {
    if (!progress) return {};

    const scale = interpolate(progress.value, [0, 1], [1, 0.85]);
    const translateX = interpolate(
      progress.value,
      [0, 1],
      [0, SCREEN_WIDTH * 0.95]
    );
    const borderRadius = interpolate(progress.value, [0, 1], [0, 20]);

    return {
      transform: [{ scale }, { translateX }],
      borderRadius,
      overflow: "hidden",
    };
  });

  return (
    <ScrollView className="flex-1 bg-tertiarywhite">
      <Animated.View style={animatedStyle} className="flex-1 bg-tertiarywhite">
        {/* Container */}
        <View className="flex-1 pt-16 px-5 w-full">
          {/* Header */}
          <View className="flex-row items-center space-x-3 gap-3 justify-between">
            <Animated.View
              entering={FadeInUp.delay(200).duration(1000).springify()}
              className="flex-row gap-3"
            >
              {" "}
              <TouchableOpacity
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              >
                <Image
                  source={{
                    uri: "https://i.pinimg.com/736x/aa/5d/c6/aa5dc6ee57c1ddbc7979a3de662f1f38.jpg",
                  }}
                  style={{ height: 50, width: 50, borderRadius: 30 }}
                />
              </TouchableOpacity>
              <View className="justify-center">
                <Text className="text-2xl font-Quicksandbold text-black">
                  Hi, Neeschal!
                </Text>
                <Text className="text-lg text-gray-600 font-Quicksandmedium">
                  So good to see you.
                </Text>
              </View>
            </Animated.View>
            <Animated.View
              entering={FadeInUp.delay(1000).duration(400).springify()}
            >
              <TouchableOpacity className="h-14 w-14 justify-center items-center bg-blue-300 rounded-3xl px-3">
                <Ionicons name="search" size={24} color={"#fdfdfd"} />
              </TouchableOpacity>
            </Animated.View>
          </View>

          <View className="mt-10 relative w-full">
            <Animated.View
              entering={FadeInUp.duration(1000).delay(600).springify()}
            >
              <Text className="text-2xl font-Quicksandsemibold mb-5">
                Find your Perfect Medicare!
              </Text>
            </Animated.View>

            {/* Buttons */}
            <View className="flex-row w-full space-x-4 gap-5">
              {/* Emergency Button */}
              <Animated.View entering={FadeInUp.delay(600).duration(1000).springify()} className="flex-1">
                <TouchableOpacity className="w-full flex-row items-center justify-center gap-3 py-3 rounded-xl bg-red-500">
                  <Ionicons name="alert" size={24} color="#fff" />
                  <Text className="text-white font-Quicksandmedium text-base">
                    Emergency
                  </Text>
                </TouchableOpacity>
              </Animated.View>

              {/* Appointment Button */}
              <Animated.View entering={FadeInUp.delay(800).duration(1000).springify()} className="flex-1">
                <TouchableOpacity className="w-full flex-row items-center justify-center gap-3 py-3 rounded-xl bg-blue-500">
                  <Ionicons name="briefcase" size={24} color="#fff" />
                  <Text className="text-white font-Quicksandmedium text-base">
                    Appointment
                  </Text>
                </TouchableOpacity>
              </Animated.View>
            </View>
          </View>


          {/* Main Content */}
          <Animated.View entering={FadeInUp.delay(1000).duration(800).springify()} className="">
            <View className="mt-10 flex-row justify-between items-center">
              <View className="flex-1 flex-row justify-between items-center">
                <Text className="font-Quicksandsemibold text-xl">
                  Upcoming Appointment
                </Text>
                <TouchableOpacity>
                  <Text className="font-Quicksandmedium text-l text-grey">
                    See All
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <Assignments />
          </Animated.View>
        </View>
      </Animated.View>
    </ScrollView>
  );
};

export default Home;
