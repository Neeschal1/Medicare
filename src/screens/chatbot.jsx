import React, { useState, useRef } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Image,
  Dimensions,
} from "react-native";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import Animated, { FadeInUp, FadeInDown } from "react-native-reanimated";

const screenheight = Dimensions.get("window").height;
const screenwidth = Dimensions.get("window").width;

const doctorrobo = require("../assets/images/doctor.json");

const key = "AIzaSyBtXuBPPNVjUq2_yM_ZxZSFbXiNnf2E55U";
const api = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`;

const homeImageUri =
  "https://i.pinimg.com/736x/aa/5d/c6/aa5dc6ee57c1ddbc7979a3de662f1f38.jpg";

const Chatbot = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const scrollViewRef = useRef();

  const generate = async () => {
    if (!prompt.trim()) return;

    const userMessage = { text: prompt, type: "user" };
    setMessages([...messages, userMessage]);
    setPrompt("");
    setLoading(true);

    // Temporary "Chatty is typing..."
    setMessages((prev) => [
      ...prev,
      { text: "🤖 Chatty is typing...", type: "bot" },
    ]);

    try {
      const response = await axios({
        url: api,
        method: "post",
        data: { contents: [{ parts: [{ text: prompt }] }] },
      });

      const result = response.data.candidates[0].content.parts[0].text;

      // Replace the typing message with the actual bot response
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = { text: result, type: "bot" };
        return newMessages;
      });
    } catch (error) {
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = {
          text: "⚠️ Error fetching response.",
          type: "bot",
        };
        return newMessages;
      });
    }

    setLoading(false);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#F9FAFB" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          {/* Header */}
          <View className="mt-20" />

          {/* Messages */}
          <ScrollView
            ref={scrollViewRef}
            contentContainerStyle={{ flexGrow: 1, paddingVertical: 10 }}
            keyboardShouldPersistTaps="handled"
            onContentSizeChange={() =>
              scrollViewRef.current?.scrollToEnd({ animated: true })
            }
            className="px-3"
          >
            {messages.length === 0 && (
              <View className="flex-1 justify-center items-center mt-20">
                <Animated.View
                  entering={FadeInUp.delay(200).duration(1000).springify()}
                >
                  <LottieView
                    style={{
                      height: screenheight * 0.4,
                      width: screenwidth * 0.7,
                    }}
                    source={doctorrobo}
                    autoPlay
                    loop
                  />
                </Animated.View>
                <Animated.View
                  entering={FadeInDown.delay(200).duration(1000).springify()}
                  className={"items-center justify-center"}
                >
                  <Text className="text-xl font-Quicksandbold text-gray-700">
                    👋 Welcome to Chatty!
                  </Text>
                  <Text className="text-base text-gray-500 mt-2 text-center">
                    Begin the conversation by asking me anything.
                  </Text>
                </Animated.View>
              </View>
            )}

            {messages.map((message, index) => (
              <View
                key={index}
                className={`mb-3 flex-row items-end w-full ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.type === "user" ? (
                  <>
                    <Animated.View
                      entering={FadeInDown.delay(200)
                        .duration(1000)
                        .springify()}
                      className="flex-row px-4 mt-5 max-w-[70%]"
                    >
                      <View className="bg-primarypurple px-4 py-3 rounded-2xl">
                        <Text className="text-white text-base">
                          {message.text}
                        </Text>
                      </View>
                      <Image
                        source={{ uri: homeImageUri }}
                        className="w-10 h-10 rounded-full ml-2"
                        resizeMode="cover"
                      />
                    </Animated.View>
                  </>
                ) : (
                  <>
                    <Animated.View entering={FadeInDown.delay(1000)
                        .duration(1000)
                        .springify()} className="flex-row max-w-[70%]">
                      <Image
                        source={{
                          uri: "https://i.pinimg.com/736x/2b/0d/a8/2b0da8205bb3f3d7c5391b7e7eb4fa99.jpg",
                        }}
                        className="w-10 h-10 rounded-full mr-2"
                        resizeMode="cover"
                      />
                      <View className="bg-blue-500 px-4 py-3 rounded-2xl ">
                        <Text className="text-white text-base">
                          {message.text}
                        </Text>
                      </View>
                    </Animated.View>
                  </>
                )}
              </View>
            ))}
          </ScrollView>

          {/* Input Section */}
          <View className="bg-gray-100 border-t border-gray-300 px-3 py-2">
            <View className="flex-row items-center">
              <TextInput
                className="flex-1 bg-white border border-gray-300 rounded-xl px-4 py-3 text-base text-gray-800"
                placeholder="Type your message..."
                placeholderTextColor="#9CA3AF"
                value={prompt}
                onChangeText={setPrompt}
              />
              <TouchableOpacity
                onPress={generate}
                className="ml-2 bg-primarypurple w-14 h-14 rounded-xl items-center justify-center"
              >
                <Ionicons name="send" size={22} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Chatbot;
