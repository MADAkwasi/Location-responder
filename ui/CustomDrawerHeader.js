import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function CustomDrawerHeader({ navigation }) {
  return (
    <Pressable onPress={() => navigation.openDrawer()}>
      <View style={styles.cont}>
        <View style={styles.btn}>
          <Ionicons name="menu" size={26} color="black" />
        </View>
      </View>
    </Pressable>
  );
}

export default CustomDrawerHeader;

const styles = StyleSheet.create({
  cont: {
    height: 70,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  btn: {
    backgroundColor: "#e0e0e0",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: -30,
    left: 15,
  },
});
