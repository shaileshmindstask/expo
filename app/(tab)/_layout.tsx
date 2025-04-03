import { Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';
import { Platform, StyleSheet, Text, View } from "react-native";

console.log(Platform.OS)


const TabRoot = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          ...Platform.select({
            ios: {
              backgroundColor: 'red', // iOS style
            },
            android: {
            //   backgroundColor: 'green', // Android style
            },
            web: {
            //   backgroundColor: 'blue', // Web style
              position: 'absolute', // Position absolutely for Web
              top: 0, // Ensure it's at the top
              left: 0,
              right: 0,
              zIndex: 1000, // Make sure it's above other content
            },
            default: {
              backgroundColor: 'blue', // Default style
            },
          }),
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About Us",
        //   tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <FontAwesome name="user-circle-o" size={24} color="blue" />,
        }}
      />
    </Tabs>
  );
};

export default TabRoot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: "green",
      },
      default: {
        backgroundColor: 'blue',
      },
    }),
  },
});
