import { Pressable, StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";

function IconBtn({ children, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.btn}>
      <View style={styles.icon}>{children}</View>
    </Pressable>
  );
}

export default IconBtn;

const styles = StyleSheet.create({
  btn: {
    alignSelf: "center",
  },
  icon: {
    backgroundColor: Colors.primary,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
