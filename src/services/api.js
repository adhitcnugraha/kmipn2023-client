import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1";

// Fungsi untuk login
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/login`, {
      email,
      password,
    });

    if (response && response.data && response.data.user_id !== undefined) {
      return response.data;
    } else {
      throw new Error("Invalid response from the server");
    }
  } catch (error) {
    console.log("error during login:", error.message);
    console.log(error.response?.data);
    throw error.response?.data || error.message;
  }
};

export const register = async (email, password, fullName) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/register`, {
      email,
      password,
      fullName,
    });

    if (response && response.data) {
      return response.data;
    } else {
      throw new Error("Invalid response from the server");
    }
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
