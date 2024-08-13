import { createContext, useState, useContext } from "react";

const GlobalStateContext = createContext();

function GlobalStateProvider({ children }) {
  const [token, setToken] = useState(null);
  const [student, setStudent] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [otherNames, setOtherNames] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [referenceNumber, setReferenceNumber] = useState("");
  const [year, setYear] = useState("");
  const [programme, setProgramme] = useState("");

  const contextValue = {
    token,
    setToken,
    student,
    setStudent,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    otherNames,
    setOtherNames,
    email,
    setEmail,
    password,
    setPassword,
    passwordConfirm,
    setPasswordConfirm,
    referenceNumber,
    setReferenceNumber,
    year,
    setYear,
    programme,
    setProgramme,
  };

  return (
    <GlobalStateContext.Provider value={contextValue}>
      {children}
    </GlobalStateContext.Provider>
  );
}

function useGlobalState() {
  const context = useContext(GlobalStateContext);

  if (context === undefined)
    throw new Error(
      "GlobalStateContext was used outside of GlobalStateProvider"
    );

  return context;
}

export { GlobalStateProvider, useGlobalState };
