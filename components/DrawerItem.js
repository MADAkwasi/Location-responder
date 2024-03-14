import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function DrawerItem({ label, icon, style, navigate }) {
  const navigation = useNavigation();
  return (
    <Pressable
      android_ripple={{ color: "#d1d1d1" }}
      onPress={() => navigation.navigate(navigate)}
    >
      <View style={[styles.cont, style]}>
        <Ionicons name={icon} size={28} color="black" />
        <Text style={styles.txt}>{label}</Text>
      </View>
    </Pressable>
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
  }
});
