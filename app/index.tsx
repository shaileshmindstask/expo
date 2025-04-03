import { Link } from "expo-router";
import { Text, View } from "react-native";

const Index = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      backgroundColor: 'red',
      alignItems: "center"
    }}>
      <Text style={{
        color: 'white',
        fontSize: 30,
        fontWeight: "700"
      }}>
        Hello Expo..!!
      </Text>
      <Link href='/about' style={{color: 'white'}}>About</Link>
    </View>
  );
}

export default Index
