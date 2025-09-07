import {
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
  Keyboard,
  Platform,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  FadeIn,
  FadeOut,
  FadeInUp,
  FadeInDown,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  BounceIn,
} from "react-native-reanimated";

const loginbg = require("../assets/images/loginbg.png");
const logo = require("../assets/images/logo.png");
const apple = require("../assets/images/apple.png");
const google = require("../assets/images/google.png");

const { height: screenHeight } = Dimensions.get("window");

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  // Reanimated shared value for translateY
  const translateY = useSharedValue(0);

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      (e) => {
        const keyboardHeight = e.endCoordinates?.height || 0;
        const maxShift = screenHeight * 0.15;
        const shift = Math.min(keyboardHeight / 2, maxShift);
        translateY.value = withTiming(-shift, { duration: 400 });
      }
    );

    const keyboardHideListener = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      () => {
        translateY.value = withTiming(0, { duration: 400 });
      }
    );

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const handleLogin = async () => {
  if (!isFormValid) return;

  setLoading(true);
  setEmailError(false);
  setPasswordError(false);
  setLoginError(false);

  try {
    const formBody = new URLSearchParams();
    formBody.append("username", email); // change to "email" if backend expects email
    formBody.append("password", password);

    const response = await fetch(
      "https://carezio-backend.onrender.com/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formBody.toString(),
      }
    );

    const data = await response.json();

    console.log("Login Response:", data); // debug

    if (response.ok && data.access_token) {
      await AsyncStorage.setItem("userToken", data.access_token);

      navigation.reset({
        index: 0,
        routes: [{ name: "HomeDrawer" }],
      });
    } else {
      setEmailError(true);
      setPasswordError(true);
      setLoginError(true);
      console.log("Login failed:", data.detail || data);
      setTimeout(() => setLoginError(false), 5000);
    }
  } catch (error) {
    console.error("Login error:", error);
    setEmailError(true);
    setPasswordError(true);
    setLoginError(true);
    setTimeout(() => setLoginError(false), 5000);
  }

  setLoading(false);
};


  return (
    
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Animated.View style={[{ flex: 1 }, animatedStyle]}>
          <View className="flex-1">
            <StatusBar hidden={true} />

            {/* Background */}
            <ImageBackground
              source={loginbg}
              className="w-full justify-center items-center"
              style={{ height: screenHeight * 0.35 }}
              resizeMode="cover"
            >
              {loginError && (
                <Animated.View
                  entering={BounceIn.delay(200).duration(600)}
                  className="bg-red-500 p-3 rounded-lg w-11/12 items-center"
                >
                  <Text className="text-white font-bold">
                    Invalid credentials!
                  </Text>
                  <Text className="text-white font-medium">
                    Please check your account and try again
                  </Text>
                </Animated.View>
              )}
            </ImageBackground>

            {/* Card */}
            <ScrollView
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              className="mt-[-40] pb-10 bg-tertiarywhite"
              style={{borderTopLeftRadius: 20, borderTopRightRadius: 20}}
            >
              <View
                className="flex-1 bg-tertiarywhite py-10 items-center justify-center"
              >
                <View className="w-11/12 items-center space-y-5 gap-5 ">
                  {/* Title */}
                  <View className="items-center space-y-2">
                    <Animated.View
                      entering={FadeInUp.delay(200).duration(1000).springify()}
                      className="flex-row items-center space-x-2"
                    >
                      <Image source={logo} className="h-10 w-10" />
                      <Text className="text-2xl font-Quicksandbold text-violet-600">
                        MediCare
                      </Text>
                    </Animated.View>
                    <Animated.Text
                      entering={FadeInUp.delay(400).duration(1000).springify()}
                      className="text-sm text-gray-500 text-center font-Quicksandmedium"
                    >
                      Please login your account in order to continue.
                    </Animated.Text>
                  </View>

                  {/* Email */}
                  <Animated.View
                    entering={FadeInUp.delay(600).duration(1000).springify()}
                    className="w-full space-y-2"
                  >
                    <Text className="text-lg font-Quicksandsemibold text-black">
                      Email:
                    </Text>
                    <TextInput
                      value={email}
                      onChangeText={(text) => {
                        setEmail(text);
                        setEmailError(false);
                      }}
                      keyboardType="email-address"
                      placeholder="Enter your Email"
                      className={`h-14 rounded-xl px-4 text-sm border font-Quicksandmedium ${
                        emailError
                          ? "border-red-500"
                          : email
                            ? "border-violet-600"
                            : "border-gray-300"
                      }`}
                    />
                  </Animated.View>

                  {/* Password */}
                  <Animated.View
                    entering={FadeInUp.delay(800).duration(1000).springify()}
                    className="w-full space-y-2"
                  >
                    <Text className="text-lg font-font-Quicksandsemibold text-black">
                      Password:
                    </Text>
                    <View className="relative">
                      <TextInput
                        value={password}
                        onChangeText={(text) => {
                          setPassword(text);
                          setPasswordError(false);
                        }}
                        placeholder="Enter your Password"
                        secureTextEntry={!showPassword}
                        className={`h-14 font-Quicksandmedium rounded-xl px-4 text-sm border ${
                          passwordError
                            ? "border-red-500"
                            : password
                              ? "border-violet-600"
                              : "border-gray-300"
                        }`}
                      />
                      <TouchableOpacity
                        className="absolute right-4 top-3"
                        onPress={() => setShowPassword(!showPassword)}
                      >
                        <Ionicons
                          name={showPassword ? "eye-off" : "eye"}
                          size={24}
                          color="gray"
                        />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                      <Text className="self-end text-blue-600 py-3 font-Quicksandsemibold">
                        Forgot Password?
                      </Text>
                    </TouchableOpacity>
                  </Animated.View>

                  {/* Login Button */}
                  <Animated.View
                    className={"w-full"}
                    entering={FadeInUp.delay(1000).duration(1000).springify()}
                  >
                    <TouchableOpacity
                      disabled={!isFormValid || loading}
                      className={`w-full rounded-xl py-4 items-center ${
                        isFormValid && !loading
                          ? "bg-violet-600"
                          : "bg-violet-600 opacity-70"
                      }`}
                      onPress={handleLogin}
                    >
                      {loading ? (
                        <ActivityIndicator size="small" color="#fff" />
                      ) : (
                        <Text className="text-tertiarywhite text-base font-Quicksandbold">
                          Login
                        </Text>
                      )}
                    </TouchableOpacity>
                  </Animated.View>

                  {/* Divider */}
                  <Animated.View
                    entering={FadeInDown.delay(1000).duration(1000).springify()}
                    className="flex-row items-center justify-center space-x-2"
                  >
                    <View className="flex-1 h-px bg-gray-300" />
                    <Text className="text-gray-500 font-Quicksandmedium px-5">
                      OR
                    </Text>
                    <View className="flex-1 h-px bg-gray-300" />
                  </Animated.View>

                  {/* Social Buttons */}
                  <View className="w-full items-center space-y-4 gap-3">
                    <Animated.View
                      className={"w-full"}
                      entering={FadeInDown.delay(400)
                        .duration(1000)
                        .springify()}
                    >
                      <TouchableOpacity className="w-full rounded-xl py-3 bg-black items-center">
                        <View className="flex-row items-center space-x-4 gap-3">
                          <Image source={apple} />
                          <Text className="text-white font-Quicksandmedium">
                            Continue with Apple
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </Animated.View>
                    <Animated.View
                      className={"w-full"}
                      entering={FadeInDown.delay(600)
                        .duration(1000)
                        .springify()}
                    >
                      <TouchableOpacity className="w-full rounded-xl py-3 border border-gray-300 items-center">
                        <View className="flex-row items-center space-x-4 gap-3">
                          <Image source={google} />
                          <Text className="text-black font-Quicksandmedium">
                            Continue with Google
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </Animated.View>
                  </View>

                  {/* Signup */}
                  <View className="flex-row space-x-1 mt-2 gap-2 justify-center items-center">
                    <Text className="text-gray-500 font-Quicksandmedium">
                      New to CareBuddy?
                    </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Doctorwelcome")}
                    >
                      <Text className="text-primarypurple text-xl font-Quicksandbold">
                        Signup
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </Animated.View>
      </KeyboardAvoidingView>
    
  );
};

export default Login;
