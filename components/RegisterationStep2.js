import { StyleSheet, TextInput } from "react-native";
import { useGlobalState } from "../context/GlobalStateContext";

function RegisterationStep2() {
  const {
    email,
    password,
    passwordConfirm,
    setEmail,
    setPassword,
    setPasswordConfirm,
  } = useGlobalState();

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email.trim()}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={passwordConfirm}
        onChangeText={setPasswordConfirm}
      />
    </>
  );
}

export default RegisterationStep2;

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
