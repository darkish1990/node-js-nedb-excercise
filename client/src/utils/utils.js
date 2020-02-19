export const handleFetchClickLogin = (e, data) => {
  fetch("http://localhost:3000/users/register", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
};
export const handleFetchClickGet = (e, data) => {
  fetch("http://localhost:3000/users/getUsers")
    .then(response => response.json())
    .then(data => {
      console.log("here is ur response", data);
    })
    .catch(error => console.error("Error:", error));
};

export const handleFetchClickDelete = (e, data) => {
  fetch("http://localhost:3000/users/deleteUser", {
    method: "DELETE", // or 'PUT'
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
};
