import { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import Txt from "../components/Text";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import Heading from "../components/Heading";
import TextButton from "../components/TextButton";
import { loginStudent } from "../providers/studentProviders";
import { useGlobalState } from "../context/GlobalStateContext";
import { BarIndicator } from "react-native-indicators";

function Login() {
  const [username, setUsername] = useState("madarko");
  const [password, setPassword] = useState("Agy3m@n7");
  const [isLoading, setIsLoading] = useState(false);
  const { token, setToken, student, setStudent } = useGlobalState();
  const navigation = useNavigation();

  async function handleLogin() {
    try {
      setIsLoading(true);
      const user = await loginStudent(username, password);
      setToken(user.token);
      setStudent(user.student);

      if (!token) {
        setIsLoading(false);
        return;
      }

      navigation.reset({
        index: 0,
        routes: [{ name: "Main" }],
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View style={styles.cont}>
      <Heading />
      <View style={styles.form}>
        <Txt
          style={{
            fontFamily: "RubikMaps",
            fontSize: 28,
            color: Colors.primary,
            textAlign: "left",
          }}
        >
          Log In
        </Txt>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TextButton onPress={handleLogin}>
          {isLoading ? <BarIndicator color="white" size={20} /> : `Log In`}
        </TextButton>
        <Txt>Don't have an account?</Txt>
        <TextButton
          viewStyle={{
            marginTop: 5,
            backgroundColor: "#fff",
            borderColor: Colors.primary,
            borderWidth: 2,
          }}
          textStyle={{
            color: Colors.primary,
          }}
          onPress={() => navigation.navigate("Sign Up")}
        >
          Register
        </TextButton>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  form: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 100,
  },
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
