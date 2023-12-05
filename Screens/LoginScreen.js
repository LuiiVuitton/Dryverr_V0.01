import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image } from "react-native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />

      {/*Background*/}
      <Image
      //className="h-full w-full "
      //source={require("../assets/C2A_LOGO.png")}
      />

      {/*logo*/}
      <View className="flex-row justify-around w-full absolute">
        <Image
        //className="h-[300] w-[300]"
        //source={require("../assets/C2A_LOGO.png")}
        />
      </View>

      {/*Title and Form*/}

      <View className="h-full w-full flex justify-around pt-40 pb-10">
        {/*Title*/}
        <View className="flex items-center">
          <Text className="text-black  font-bold tracking-wider text-5xl">
            HomeSale.Plus
          </Text>
          <Text>AppDemo 0.001</Text>
        </View>
        {/*Form*/}
        <View className="flex items-center mx-4 space-y-4">
          <View className="bg-black/5 p-5 rounded-2xl w-full">
            <TextInput placeholder="Email" placeholderTextColor={"gray"} />
          </View>
          <View className="bg-black/5 p-5 rounded-2xl w-full mb-3">
            <TextInput
              placeholder="Password"
              placeholderTextColor={"gray"}
              secureTextEntry
            />
          </View>

          <View className="w-full">
            <TouchableOpacity onPress={() => navigation.push("home")}>
              <View className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
                <Text className="text-xl font-bold text-white text-center">
                  Login
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-center">
            <Text>Don't have an account? </Text>
            <TouchableOpacity>
              <Text className="text-sky-600">SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
