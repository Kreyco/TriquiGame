import axios from "axios";
// import authHeader from '../services/auth-header';

const APICore = "http://localhost:8000/api/users";

export default {
  get() {
    // return axios.get(APICore, { headers: authHeader() });
    return axios.get(APICore, {});
  },
  getById(userId) {
    if (userId == null)
    {
      return this.get();
    }
    
    // return axios.get(APICore + `/${userId}`, { headers: authHeader() });
    return axios.get(APICore + `/${userId}`, {});
  },
};