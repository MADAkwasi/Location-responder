import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import CustomDrawerComponent from "./ui/CustomDrawerComponent";
import { useFonts } from "expo-font";

const Drawer = createDrawerNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={() => <CustomDrawerComponent />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#e0e0e0",
          },
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
