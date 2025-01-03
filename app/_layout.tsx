import { colors } from "../styles/colors";
import "@/styles/global.css"



import { StatusBar } from "expo-status-bar"
import { Slot } from "expo-router"

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto"

import { GestureHandlerRootView } from "react-native-gesture-handler"

import { Loading } from "@/components/loading"

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Slot />
    </GestureHandlerRootView>
  )
}