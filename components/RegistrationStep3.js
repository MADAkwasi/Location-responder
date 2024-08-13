import { StyleSheet, TextInput } from "react-native";
import { useGlobalState } from "../context/GlobalStateContext";

function RegisterationStep3() {
  const {
    referenceNumber,
    year,
    programme,
    setReferenceNumber,
    setYear,
    setProgramme,
  } = useGlobalState();

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Reference Number"
        keyboardType="numeric"
        value={referenceNumber}
        onChangeText={setReferenceNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Year"
        keyboardType="numeric"
        value={year}
        onChangeText={setYear}
      />
      <TextInput
        style={styles.input}
        placeholder="Programme of study"
        value={programme}
        onChangeText={setProgramme}
      />
    </>
  );
}

export default RegisterationStep3;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#d9f0ff",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    fontFamily: "OpenSans",
  },
});
