import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native"; 
import LoadingScreen from "./src/screens/LoadingScreen";
import HomeScreen from "./src/screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar 
       style="dark"
       translucent={true}
       backgroundColor={Platform.OS === 'ios' ? 'transparent' : '#8A19D6'}
       barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
      />
      <Stack.Navigator initialRouteName="LoadingScreen">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="LoadingScreen"
          component={LoadingScreen}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
