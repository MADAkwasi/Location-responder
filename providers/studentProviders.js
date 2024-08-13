import axios from "axios";

const BASE_URL = "https://ctcs-api.onrender.com/api/v1/student";

export async function loginStudent(username, password) {
  let user;
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      username,
      password,
    });
    user = response.data;
  } catch (err) {
    console.log(err.response.data.message);
  }
  return user;
}

export async function registerStudent(
  firstName,
  lastName,
  otherNames,
  email,
  password,
  passwordConfirm,
  referenceNumber,
  year,
  programme
) {
  let user;
  try {
    const response = await axios.post(`${BASE_URL}/register`, {
      firstName,
      lastName,
      otherNames,
      email,
      password,
      passwordConfirm,
      referenceNumber,
      year,
      programme,
    });

    user = response.data;
  } catch (err) {
    console.log(err.response.data.message);
  }

  return user;
}
