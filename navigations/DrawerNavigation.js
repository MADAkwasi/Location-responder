import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import CustomDrawerComponent from "../ui/CustomDrawerComponent";
import Profile from "../screens/Profile";
import CustomDrawerHeader from "../ui/CustomDrawerHeader";

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
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
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          header: ({ navigation }) => (
            <CustomDrawerHeader navigation={navigation} />
          ),
        }}
      />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
