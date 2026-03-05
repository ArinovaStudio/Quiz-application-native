import { View, Text, TouchableOpacity } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { WifiOff, RotateCcw } from "lucide-react-native";

export default function NoInternetScreen() {
  const retryConnection = async () => {
    await NetInfo.fetch();
  };

  return (
    <View className="flex-1 min-h-screen bg-amber-300 p-5 justify-center">
      
      {/* Main Card */}
      <View
        className="border-4 border-black rounded-2xl p-6 bg-yellow-200"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 6, height: 6 },
          shadowOpacity: 1,
          shadowRadius: 0,
          elevation: 8,
          transform: [{ rotate: "-0.5deg" }],
        }}
      >
        {/* Icon Box */}
        <View
          className="w-20 h-20 bg-white border-4 border-black rounded-xl items-center justify-center mb-5"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 4, height: 4 },
            shadowOpacity: 1,
            shadowRadius: 0,
            elevation: 6,
          }}
        >
          <WifiOff size={36} strokeWidth={3} color="black" />
        </View>

        {/* Title */}
        <Text className="text-2xl font-extrabold uppercase mb-2">
          No Internet
        </Text>

        {/* Subtitle */}
        <Text className="text-black/70 font-bold mb-6">
          Please check your connection and try again.
        </Text>

        {/* Retry Button */}
        <TouchableOpacity
          onPress={retryConnection}
          className="border-4 border-black bg-white rounded-xl p-4 flex-row items-center justify-center"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 4, height: 4 },
            shadowOpacity: 1,
            shadowRadius: 0,
            elevation: 6,
          }}
        >
          <RotateCcw size={20} strokeWidth={3} color="black" />
          <Text className="ml-2 font-extrabold uppercase">
            Retry
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}