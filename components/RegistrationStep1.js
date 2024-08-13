import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { useGlobalState } from "../context/GlobalStateContext";

function RegisterationStep1({ details, setDetails }) {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    otherNames,
    setOtherNames,
  } = useGlobalState("");

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName.trim()}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName.trim()}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Other Names"
        value={otherNames.trim()}
        onChangeText={setOtherNames}
      />
    </>
  );
}

export default RegisterationStep1;

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
