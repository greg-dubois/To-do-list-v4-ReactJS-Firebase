import axios from "axios";

export default axios.create({
  baseURL:
    "https://todo-react-2cea8-default-rtdb.europe-west1.firebasedatabase.app/",
});
