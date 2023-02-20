fetch("https://api.github.com/users/didiegovieira")
  .then((response) => {
    response.json().then((data) => console.log(data));
  })
  .catch((erro) => console.log("erro"));
