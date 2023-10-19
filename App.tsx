import { StatusBar } from "react-native";
import { 
  useFonts, 
  Inter_400Regular, 
  Inter_700Bold 
} from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';

import { Home } from "./src/Home";

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [isFontLoaded] = useFonts({
    Inter_400Regular, 
    Inter_700Bold 
  });

  if(isFontLoaded) {
    SplashScreen.hideAsync()
    return (
      <>
      <StatusBar barStyle="light-content" />
      <Home />
      </>
    );
  }
}