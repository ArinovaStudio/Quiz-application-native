import { View, Text, Image } from "react-native";
import { Brain, Trophy, Zap } from "lucide-react-native";
import { ActivityIndicator } from "react-native";
import { SITE_NAME } from "@/constants/constants";

export default function SplashScreen() {
  return (
    <View className="flex-1 bg-amber-300 min-h-screen justify-center items-center px-6">

      {/* Floating Icons */}
      <View className="absolute top-20 left-8 rotate-12">
        <Brain size={40} strokeWidth={3} color="black" />
      </View>

      <View className="absolute bottom-32 right-10 -rotate-12">
        <Trophy size={42} strokeWidth={3} color="black" />
      </View>

      <View className="absolute top-40 right-12 rotate-6">
        <Zap size={36} strokeWidth={3} color="black" />
      </View>

      {/* Main Card */}
      <View
        className="border-4 border-black rounded-3xl bg-yellow-200 w-full p-8 items-center"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 8, height: 8 },
          shadowOpacity: 1,
          shadowRadius: 0,
          elevation: 10,
          transform: [{ rotate: "-1deg" }],
        }}
      >

        {/* Logo Section */}
        <View
          className="w-28 h-28 bg-white border-4 border-black rounded-2xl items-center justify-center mb-6"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 6, height: 6 },
            shadowOpacity: 1,
            shadowRadius: 0,
            elevation: 8,
          }}
        >
          <Image
            source={require("../assets/logo.png")}
            className="w-16 h-16"
            resizeMode="contain"
          />
        </View>

        {/* Title */}
        <Text className="text-4xl font-extrabold uppercase tracking-wider mb-2">
          {SITE_NAME}
        </Text>

        {/* Tagline */}
        <Text className="font-bold text-black/70 text-center mb-6">
          Test your brain. Beat the leaderboard. Become a legend.
        </Text>

        {/* Progress Bar */}
        {/* <View className="w-full h-5 border-4 border-black bg-white rounded-full overflow-hidden mb-5">
          <View className="h-full bg-black w-2/3" />
        </View> */}

        {/* Loader Row */}
        <View className="flex-row items-center">
          <ActivityIndicator size="small" color="black" />
          <Text className="ml-3 font-extrabold uppercase">
            Loading Questions...
          </Text>
        </View>
      </View>

      {/* Bottom Hint */}
      <Text className="absolute bottom-16 font-bold text-black/70">
        ⚡ Fun quizzes loading...
      </Text>

    </View>
  );
}