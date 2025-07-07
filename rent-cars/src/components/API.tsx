import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api/v1/rent-cars",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // ✅ Add this line!
});

export default apiClient;
