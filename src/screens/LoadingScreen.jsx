import { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export default function LoadingScreen({navigation}) {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(false);
      navigation.replace("HomeScreen"); 
    }, 5000); 
    return () => clearTimeout(timer); 
  }, []);

  return (
    <View style={style.background}>
      <View style={style.container}>
        <Image source={require("../assets/nubank.png")} />
        <ActivityIndicator
          style={style.indicator}
          color={"white"}
          size={50}
        >
        </ActivityIndicator>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  background: {
    backgroundColor: "#8A19D6",
    flex: 1,
    justifyContent: "center",
    alignItems:'center'
  },  
});
