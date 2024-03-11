import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function DrawerItem({ label, icon, style }) {
  return (
    <View style={[styles.cont, style]}>
      <Ionicons name={icon} size={28} color="black" />
      <Text style={styles.txt}>{label}</Text>
    </View>
  );
}

export default DrawerItem;

const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  txt: {
    fontSize: 17,
    fontWeight: "400",
    fontFamily: "OpenSans",
  },
});
