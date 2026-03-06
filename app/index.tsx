import { Text, View, BackHandler, Image } from "react-native";
import WebView from "react-native-webview";
import * as Network from "expo-network";
import { useEffect, useRef, useState } from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import SplashScreen from "@/components/SplashScreen";
import NoInternetScreen from "@/components/InternetNotConnected";

export default function Index() {
  const [isConnected, setIsConnected]: any = useState(null);
  const [splash, setSplash] = useState<boolean>(true);
  useEffect(() => {
    const checkNetwork = async function () {
      const networkstatus = await Network.getNetworkStateAsync();
      setIsConnected(networkstatus.isConnected);
    };

    checkNetwork();
  }, []);
  const webViewRef:any = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    const backAction = () => {
      if (canGoBack && webViewRef.current) {
        // window.
        webViewRef.current.reload();
        webViewRef.current.goBack();
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove(); // Cleanup on component unmount
  }, [canGoBack]);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, [])
  return (
    <View style={{ flex: 2, paddingTop: "10%", backgroundColor: "white" }}>
      {
      splash ? <SplashScreen/> :
      isConnected ? (
        <WebView 
        ref={webViewRef}
        source={{ uri: "https://olobix.com/mobile" }}
        onNavigationStateChange={(navState) => setCanGoBack(navState.canGoBack)}
        />
      ) : (
        <NoInternetScreen/>
      )}
    </View>
  );
}