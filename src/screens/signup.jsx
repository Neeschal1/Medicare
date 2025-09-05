import {
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Image,
  Keyboard,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  FadeInUp,
  FadeInDown,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const apple = require("../assets/images/apple.png");
const google = require("../assets/images/google.png");
const logo = require("../assets/images/logo.png");

const Signup = () => {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [signupError, setSignupError] = useState(false);

  const isFormValid =
    fullName.trim() !== "" && email.trim() !== "" && password.trim() !== "";

  // Reanimated shared value for keyboard shift
  const translateY = useSharedValue(0);

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      (e) => {
        const keyboardHeight = e.endCoordinates?.height || 0;
        const shift = Math.min(keyboardHeight / 2, 40);
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

  const handleSignup = async () => {
    if (!isFormValid) return;

    setLoading(true);
    setEmailError(false);
    setPasswordError(false);
    setSignupError(false);

    try {
      const response = await fetch(
        "https://carezio-backend.onrender.com/users/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fullName, email, password }),
        }
      );

      // Debugging: log raw response if it's not JSON
      let data;
      try {
        data = await response.json();
      } catch (err) {
        console.error("Failed to parse JSON. Response may be HTML.");
        const text = await response.text();
        console.log("Raw response:", text);
        setSignupError(true);
        setLoading(false);
        return;
      }

      if (response.ok) {
        navigation.replace("Idcreated");
      } else {
        setEmailError(true);
        setPasswordError(true);
        setSignupError(true);
        setTimeout(() => setSignupError(false), 5000);
      }
    } catch (error) {
      console.error(error);
      setEmailError(true);
      setPasswordError(true);
      setSignupError(true);
      setTimeout(() => setSignupError(false), 5000);
    }

    setLoading(false);
  };

  return (
    <Animated.View style={[{ flex: 1 }, animatedStyle]}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        style={{ borderTopLeftRadius: 20 }}
      >
        <StatusBar hidden={true} />

        <View className="flex-1 bg-tertiarywhite w-full h-[70%] rounded-3xl items-center justify-center gap-5 mt-120 pt-8">
          <View
            style={{ borderTopLeftRadius: 20 }}
            className="w-full items-center justify-center gap-8 mt-10"
          >
            {/* Logo & Title */}
            <Animated.View
              entering={FadeInUp.delay(200).duration(1000).springify()}
            >
              <View className="flex-row justify-center gap-3 items-center">
                <Image source={logo} />
                <Text className="text-primarypurple text-3xl font-Quicksandbold">
                  Medicare
                </Text>
              </View>
              <Text className="text-gray-500 font-Quicksandmedium text-center text-sm mt-2 mx-3.5">
                Signup a new account for free, to use the services of Medicare!
              </Text>
            </Animated.View>

            {/* Full Name Input */}
            <View className="flex-1 w-full items-center gap-4">
              <Animated.View
                entering={FadeInUp.delay(400).duration(1000).springify()}
                className="w-full ml-10 gap-2"
              >
                <Text className="text-black-[18px] font-Quicksandsemibold">
                  Full Name:
                </Text>
                <TextInput
                  value={fullName}
                  onChangeText={setFullName}
                  placeholder="Enter your Full Name:"
                  className="h-18 w-full max-w-[90%] rounded-2xl py-4 border font-Quicksandmedium pl-5"
                  style={{
                    borderColor: fullName ? "#7C3AED" : "#ccc",
                  }}
                />
              </Animated.View>

              {/* Email Input */}
              <Animated.View
                entering={FadeInUp.delay(600).duration(1000).springify()}
                className="w-full ml-10 gap-2"
              >
                <Text className="text-black-[18px] font-Quicksandsemibold">
                  Email:
                </Text>
                <TextInput
                  value={email}
                  onChangeText={(text) => {
                    setEmail(text);
                    setEmailError(false);
                  }}
                  keyboardType="email-address"
                  placeholder="Enter your Email:"
                  className="h-18 w-full max-w-[90%] rounded-2xl py-4 border font-Quicksandmedium pl-5"
                  style={{
                    borderColor: emailError
                      ? "red"
                      : email
                        ? "#7C3AED"
                        : "#ccc",
                  }}
                />
              </Animated.View>

              {/* Password Input */}
              <Animated.View
                entering={FadeInUp.delay(800).duration(1000).springify()}
                className="w-full ml-10 gap-2 relative items-start"
              >
                <Text className="text-black-[18px] font-Quicksandsemibold">
                  Password:
                </Text>
                <View className="w-full max-w-[90%]">
                  <TextInput
                    value={password}
                    onChangeText={(text) => {
                      setPassword(text);
                      setPasswordError(false);
                    }}
                    placeholder="Set up a new password:"
                    secureTextEntry={!showPassword}
                    className="h-18 w-full rounded-2xl py-4 border font-Quicksandmedium pl-5 pr-12"
                    style={{
                      borderColor: passwordError
                        ? "red"
                        : password
                          ? "#7C3AED"
                          : "#ccc",
                    }}
                  />
                  <TouchableOpacity
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Ionicons
                      name={showPassword ? "eye-off" : "eye"}
                      size={24}
                      color="gray"
                    />
                  </TouchableOpacity>
                </View>
              </Animated.View>
              <Animated.View
                entering={FadeInUp.delay(800).duration(1000).springify()}
                className="w-full ml-10 gap-2 relative items-start"
              >
                <Text className="text-black-[18px] font-Quicksandsemibold">
                  Confirm Password:
                </Text>
                <View className="w-full max-w-[90%]">
                  <TextInput
                    // value={password}
                    // onChangeText={(text) => {
                    //   setPassword(text);
                    //   setPasswordError(false);
                    // }}
                    placeholder="Confirm your new password:"
                    secureTextEntry={!showPassword}
                    className="h-18 w-full rounded-2xl py-4 border font-Quicksandmedium pl-5 pr-12"
                    style={{
                      borderColor: passwordError
                        ? "red"
                        : password
                          ? "#7C3AED"
                          : "#ccc",
                    }}
                  />
                  <TouchableOpacity
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Ionicons
                      name={showPassword ? "eye-off" : "eye"}
                      size={24}
                      color="gray"
                    />
                  </TouchableOpacity>
                </View>
              </Animated.View>
            </View>
            {/* Signup Button */}
            <Animated.View
              entering={FadeInUp.delay(1000).duration(1000).springify()}
              className="w-full items-center"
            >
              <TouchableOpacity
                disabled={!isFormValid || loading}
                className="h-15 w-full max-w-[90%] rounded-2xl items-center justify-center py-4 bg-primarypurple"
                style={{ opacity: isFormValid && !loading ? 1 : 0.7 }}
                onPress={handleSignup}
              >
                {loading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <Text className="text-tertiarywhite text-lg font-Quicksandbold">
                    Signup
                  </Text>
                )}
              </TouchableOpacity>
            </Animated.View>

            {/* OR Divider */}
            <Animated.View
              entering={FadeInDown.delay(400).duration(1000).springify()}
              className="flex-row justify-center items-center gap-3 mt-2"
            >
              <View className="w-20 border-t border-gray-300" />
              <Text className="font-Quicksandmedium">OR</Text>
              <View className="w-20 border-t border-gray-300" />
            </Animated.View>

            {/* Social Buttons */}
            <Animated.View
              entering={FadeInDown.delay(600).duration(1000).springify()}
              className="w-full items-center gap-3 mt-2 mb-6"
            >
              <TouchableOpacity className="h-15 w-full max-w-[90%] rounded-2xl items-center justify-center py-3.5 bg-black flex-row gap-3">
                <Image source={apple} />
                <Text className="font-Quicksandmedium text-tertiarywhite">
                  Continue with Apple
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="h-15 w-full max-w-[90%] rounded-2xl items-center justify-center py-3.5 border border-grey flex-row gap-3">
                <Image source={google} />
                <Text className="font-Quicksandmedium text-black">
                  Continue with Google
                </Text>
              </TouchableOpacity>
              <View className="flex-row gap-2 mt-2">
                <Text className="font-Quicksandmedium">
                  Already have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text className="font-Quicksandbold text-xl text-primarypurple">
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </View>
        </View>
      </ScrollView>
    </Animated.View>
  );
};

export default Signup;
