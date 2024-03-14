import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import CustomDrawerComponent from "./ui/CustomDrawerComponent";
import { useFonts } from "expo-font";
import Profile from "./screens/Profile";
import CustomDrawerHeader from "./ui/CustomDrawerHeader";

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
          drawerType: "slide",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            header: ({ navigation }) => (
              <CustomDrawerHeader navigation={navigation} />
            ),
          }}
        />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
