import { Image } from "expo-image";
import { Platform, StyleSheet, Text, View } from "react-native";
import { HelloWave } from "@/components/hello-wave";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import NoInternetScreen from "@/components/InternetNotConnected";
import NetInfo from "@react-native-community/netinfo";
import { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";
export default function HomeScreen() {
  const [isConnected, setIsConnected] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(!!state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  if (!isConnected) {
    return <NoInternetScreen />;
  }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500); // splash duration
  }, []);

  if (loading) {
    return <SplashScreen />;
  }
  return (
    <SafeAreaView>
      <Text>This is Home Page</Text>
    </SafeAreaView>
  );
}

