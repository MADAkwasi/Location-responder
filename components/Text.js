import { StyleSheet, Text } from "react-native";

function Txt({ children, style }) {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
}

export default Txt;

const styles = StyleSheet.create({
  text: {
    fontFamily: "OpenSans",
    textAlign: "center",
    marginVertical: 5,
  },
});
