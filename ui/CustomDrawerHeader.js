import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function CustomDrawerHeader({ navigation }) {
  return (
    <View style={styles.cont}>
      <View style={styles.btn}>
        <Pressable onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={26} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

export default CustomDrawerHeader;

const styles = StyleSheet.create({
  cont: {
    // height: 70,
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
    bottom: -90,
    left: 15,
  }
});
