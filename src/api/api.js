// api.js
import axios from 'axios';

export const fetchDataFromAPI = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data; // Return the data for further processing
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Throw the error for the caller to handle
  }
};