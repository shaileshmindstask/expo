import { Stack } from "expo-router"
// import Drawer from "expo-router/drawer"
// import { GestureHandlerRootView } from "react-native-gesture-handler"


const RootLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen name="(tab)" options={{ headerShown: false }} />
                <Stack.Screen name="index" />
            </Stack>


            {/* <GestureHandlerRootView style={{ flex: 1 }}>
                <Drawer />
            </GestureHandlerRootView> */}
        </>

    )
}

export default RootLayout