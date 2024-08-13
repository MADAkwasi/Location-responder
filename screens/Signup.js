import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import Txt from "../components/Text";
import Colors from "../constants/Colors";
import Heading from "../components/Heading";
import { useState } from "react";
import TextButton from "../components/TextButton";
import { useNavigation } from "@react-navigation/native";
import RegisterationStep1 from "../components/RegistrationStep1";
import RegisterationStep2 from "../components/RegisterationStep2";
import RegisterationStep3 from "../components/RegistrationStep3";
import { useGlobalState } from "../context/GlobalStateContext";
import { registerStudent } from "../providers/studentProviders";
import { BarIndicator } from "react-native-indicators";

function Signup() {
  const navigation = useNavigation();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const {
    firstName,
    lastName,
    otherNames,
    email,
    password,
    passwordConfirm,
    referenceNumber,
    year,
    programme,
  } = useGlobalState();
  const { setStudent, setToken, token } = useGlobalState();

  async function handleSignup() {
    try {
      setIsLoading(true);
      const user = await registerStudent(
        firstName,
        lastName,
        otherNames,
        email,
        password,
        passwordConfirm,
        referenceNumber,
        +year,
        programme
      );
      console.log(user);
      setStudent(user.data.student);
      setToken(user.token);
      if (!token) throw new Error("Registration Failed");
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
    return navigation.navigate("Main");
  }

  function handleNext() {
    setStep((step) => step + 1);
  }

  function handleBack() {
    if (step === 1) return navigation.navigate("Log In");

    setStep((step) => step - 1);
  }

  return (
    <View style={styles.cont}>
      <Heading />
      <View style={styles.form}>
        <View style={styles.txtView}>
          <Txt
            style={{
              fontFamily: "RubikMaps",
              fontSize: 28,
              color: Colors.primary,
              textAlign: "left",
            }}
          >
            Register
          </Txt>
          <Txt
            style={{
              fontFamily: "OpenSansBold",
              fontSize: 11,
              color: Colors.primary,
            }}
          >
            (Step {step} of 3)
          </Txt>
        </View>
        {step === 1 && <RegisterationStep1 />}
        {step === 2 && <RegisterationStep2 />}
        {step === 3 && <RegisterationStep3 />}
        <TextButton
          onPress={step === 3 ? () => handleSignup() : () => handleNext()}
        >
          {step === 3 ? (
            isLoading ? (
              <BarIndicator size={20} color="white" />
            ) : (
              `Sign Up`
            )
          ) : (
            `Next`
          )}
        </TextButton>
        {step === 1 && <Txt>Already have an account?</Txt>}
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
          onPress={handleBack}
        >
          {step === 1 ? `Log In` : `Back`}
        </TextButton>
      </View>
    </View>
  );
}

export default Signup;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingBottom: 100,
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
  },
  txtView: {
    flexDirection: "row",
    gap: 7,
    alignItems: "center",
  },
});
