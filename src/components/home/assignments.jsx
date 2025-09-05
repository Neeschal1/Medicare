import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Screenwidth = Dimensions.get("window").width;

const doctor = require("../../assets/images/doctorimage.png");

const Assignments = () => {
  return (
    <View>
      <View className="h-100 w-15 bg-blue-500 flex-row rounded-3xl mt-3">
        <View className="p-5">
          <View>
            <Text className="font-Quicksandbold text-tertiarywhite text-3xl">
              Dr. Dianne Russel
            </Text>
            <Text className="font-Quicksandmedium text-tertiarywhite text-xl">
              Neurology Specialist
            </Text>
          </View>
          <View>
            <Text className="font-Quicksandregular text-white pt-3 text-s">
              Dr. Dianne Russel is a {"\n"}neurology specialist. She received
              {"\n"}her Doctor of Neurology Surg...
            </Text>
            <View className=" py-3 items-center rounded mt-3 mr-20">
              <Text className="font-Quicksandregular text-white">
                Starts in: 30 minutes
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity className="flex-row gap-3 items-center bg-primarypurple py-3 px-3 rounded mr-20">
              <Ionicons name="videocam" size={30} color={"#F2F1FF"} />
              <Text className="text-tertiarywhite font-Quicksandmedium">
                Join the Call
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Image
            style={{
              height: 250,
              width: 200,
              marginLeft: -60,
              marginTop: 11,
            }}
            source={doctor}
          />
        </View>
      </View>
    </View>
  );
};

export default Assignments;
