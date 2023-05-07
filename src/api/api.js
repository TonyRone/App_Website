import axios from 'axios';

const BASE_URI = process.env.REACT_APP_API_URL;

const API = axios.create({
  baseURL: BASE_URI,
  headers: {
    "Content-Type": "application/json",
  }
});

export const join = async (email) => {
  const data = {
    email,
  };
  return API.post('/join', data)
    .then(res => res.data)
    .catch(error => {
      return { result: false, error: { message: error.message }};
    });
}

export const contact = async (firstName, lastName, email, country) => {
  const data = {
    firstName,
    lastName,
    email,
    country,
  };
  return API.post('/contact', data)
    .then(res => res.data)
    .catch(error => {
      return { result: false, error: { message: error.message }};
    });
}
