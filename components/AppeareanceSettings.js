import { StyleSheet, View } from "react-native";
import { appearance } from "../constants/SettingsOptions";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Txt from "./Text";
import Row from "./SettingsRow";

function Appearance() {
  return (
    <>
      {appearance.map((el, i) => (
        <Row key={i}>
          <MaterialIcons name={el.icon} size={24} color="black" />
          <Txt style={{ textAlign: "left", fontSize: 15 }}>{el.title}</Txt>
        </Row>
      ))}
    </>
  );
}

export default Appearance;

const styles = StyleSheet.create({
  options: {
    height: "70%",
    backgroundColor: "#e7ecef",
  },
});
