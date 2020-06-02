import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://firestore.googleapis.com/v1/projects/udemy-vuejs-a5935/databases/(default)/documents"
});

export default instance;
