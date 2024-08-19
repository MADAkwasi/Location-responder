import { Image, StyleSheet, View } from "react-native";
import { useGlobalState } from "../context/GlobalStateContext";
import Txt from "../components/Text";

function Settings() {
  const { student } = useGlobalState();
  const { firstName, lastName } = student;

  return (
    <View style={styles.cont}>
      <View style={styles.header}>
        <Txt style={{ fontSize: 20 }}>Settings</Txt>
        <Image
          style={styles.img}
          source={require("../assets/images/profile.jpg")}
        />
        <Txt>
          {firstName} {lastName}
        </Txt>
      </View>
      <View></View>
    </View>
  );
}

export default Settings;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  img: {
    borderRadius: 60,
    width: 120,
    height: 120,
    marginVertical: 5,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    height: "30%",
    backgroundColor: "#cad8de",
  },
});
