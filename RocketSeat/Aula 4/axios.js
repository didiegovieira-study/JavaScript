import axios from "axios";
axios
  .get("https://api.github.com/users/didiegovieira")
  .then((res) => {
    const user = res.data;

    return axios.get(user.login)
  })
  .then( repos => console.log(repos.data))
  .catch( error => console.log(error));
