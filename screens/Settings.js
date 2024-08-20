import { ScrollView, StyleSheet, View } from "react-native";
import { useGlobalState } from "../context/GlobalStateContext";
import Txt from "../components/Text";
import Header from "../components/SettingsHeader";
import Appearance from "../components/AppeareanceSettings";
import ShuttleOptions from "../components/ShuttleSettings";

function Settings() {
  const { student } = useGlobalState();
  const { firstName, lastName } = student;

  return (
    <View style={styles.cont}>
      <Header />
      <ScrollView style={styles.options}>
        <Txt
          style={{
            textAlign: "left",
            marginLeft: 16,
            fontSize: 18,
            marginVertical: 12,
          }}
        >
          Appearance
        </Txt>
        <Appearance />
        <Txt
          style={{
            textAlign: "left",
            marginLeft: 16,
            fontSize: 18,
            marginVertical: 12,
          }}
        >
          Shuttles
        </Txt>
        <ShuttleOptions />
      </ScrollView>
    </View>
  );
}

export default Settings;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
});
