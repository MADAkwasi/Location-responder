import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./navigations/DrawerNavigation";
import { GlobalStateProvider } from "./context/GlobalStateContext";
import Welcome from "./screens/Welcome";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
    OpenSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
    RubikMaps: require("./assets/fonts/RubikMaps-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GlobalStateProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: "white",
            },
            animationTypeForReplace: "push",
            animation: "slide_from_right",
          }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Sign Up" component={Signup} />
          <Stack.Screen name="Log In" component={Login} />
          <Stack.Screen name="Main" component={DrawerNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalStateProvider>
  );
}
