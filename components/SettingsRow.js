import { StyleSheet, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

function Row({ children }) {
  return (
    <View style={styles.row}>
      <View style={styles.title}>{children}</View>
      <Entypo name="chevron-small-right" size={24} color="black" />
    </View>
  );
}

export default Row;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    height: 50,
  },
  title: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
});
