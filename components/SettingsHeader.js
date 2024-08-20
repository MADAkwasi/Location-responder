import { Image, StyleSheet, View } from "react-native";
import { useGlobalState } from "../context/GlobalStateContext";
import Txt from "./Text";

function Header() {
  const { student } = useGlobalState();
  const { firstName, lastName } = student;

  return (
    <View style={styles.cont}>
      <Txt style={{ fontSize: 20, color: "#fff" }}>Settings</Txt>
      <Image
        style={styles.img}
        source={require("../assets/images/profile.jpg")}
      />
      <Txt style={{ fontSize: 15, color: "#fff" }}>
        {firstName} {lastName}
      </Txt>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  img: {
    borderRadius: 60,
    width: 120,
    height: 120,
    marginVertical: 5,
  },
  cont: {
    justifyContent: "center",
    alignItems: "center",
    height: "30%",
    backgroundColor: "#2b2d42",
    // dark mode: 2b2d42
  },
});
