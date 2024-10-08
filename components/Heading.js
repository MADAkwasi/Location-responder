import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../constants/Colors";

function Heading() {
  return (
    <View style={styles.heading}>
      <Entypo name="location" size={35} color={Colors.primary} />
      {/* <FontAwesome5 name="shuttle-van" size={35} color="black" /> */}
      <Text style={styles.text}>TracSit</Text>
    </View>
  );
}

export default Heading;

const styles = StyleSheet.create({
  heading: {
    marginTop: 120,
    marginBottom: 40,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    justifyContent: "center",
  },
  text: {
    fontSize: 55,
    fontFamily: "RubikMaps",
    color: Colors.primary,
  },
});
