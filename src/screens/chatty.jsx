import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

const { width } = Dimensions.get("window");
const Robo = require("../assets/images/chattyrobo.png");

const Chatty = () => {
  const navigation = useNavigation()
  return (
    <View className="flex-1 justify-start mt-20 items-center bg-tertiarywhite px-4">
      <Text className="font-Quicksandbold text-3xl pb-5">Chatty</Text>
      {/* Premium Plan Card */}
      <View className="w-full rounded-3xl bg-blue-500 p-5 flex-row justify-between items-center">
        {/* Left side (Texts + Button) */}
        <View className="flex-1 mr-3">
          <Text className="font-Quicksandbold text-2xl md:text-4xl text-tertiarywhite">
            Premium Plan
          </Text>
          <Text className="font-Quicksandregular text-base md:text-lg text-tertiarywhite mt-2">
            Harness the Full Power {"\n"}of AI with Premium Plan
          </Text>

          <TouchableOpacity className="flex-row items-center gap-2 px-3 py-3 bg-primarypurple justify-center rounded-xl mt-4">
            <Ionicons name="flash-outline" size={20} color="#ffffff" />
            <Text className="font-Quicksandmedium text-lg md:text-xl text-tertiarywhite">
              Upgrade Now
            </Text>
          </TouchableOpacity>
        </View>

        {/* Right side (Image) */}
        <Image
          source={Robo}
          style={{
            width: width * 0.28,
            aspectRatio: 110 / 140, // keeps original proportions
            resizeMode: "contain",
          }}
        />
      </View>

      {/* Feature Options */}
      <View className="flex-row flex-wrap justify-between w-full mt-6 gap-4">
        <TouchableOpacity className="w-[48%] aspect-square rounded-2xl bg-blue-300 items-center justify-center pb-10" onPress={()=>{navigation.navigate("Chatbot")}}>
          <Ionicons name="medkit" size={32} color="#1E3A8A" />
          <Text className="font-Quicksandmedium text-center text-sm mt-2">
            Generate Home Remedy {"\n"}Treatment
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="w-[48%] aspect-square rounded-2xl bg-blue-300 items-center justify-center pb-10" onPress={()=>{navigation.navigate("Chatbot")}}>
          <Ionicons name="fitness" size={32} color="blue" />
          <Text className="font-Quicksandmedium text-center text-sm mt-2">
            Personalized Fitness {"\n"}Plans
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="w-[48%] aspect-square rounded-2xl bg-blue-300 items-center justify-center pb-10" onPress={()=>{navigation.navigate("Chatbot")}}>
          <Ionicons name="fitness" size={32} color="#1E3A8A" />
          <Text className="font-Quicksandmedium text-center text-sm mt-2">
            Mental Health {"\n"}Problem
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="w-[48%] aspect-square rounded-2xl bg-blue-300 items-center justify-center pb-10" onPress={()=>{navigation.navigate("Chatbot")}}>
          <Ionicons name="fitness" size={32} color="#1E3A8A" />
          <Text className="font-Quicksandmedium text-center text-sm mt-2">
            AI Diet {"\n"}Planner
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Chatty;
