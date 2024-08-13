import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

function TextButton({ children, viewStyle, textStyle, onPress }) {
  return (
    <Pressable
      style={{ ...styles.btnView, ...viewStyle }}
      android_ripple={{ color: "#d9f0ff" }}
      onPress={onPress}
    >
      <View>
        <Text style={{ ...styles.text, ...textStyle }}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default TextButton;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: "OpenSans",
    color: "white",
    textAlign: "center",
  },
  btnView: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 17,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
});
