import axios from "axios";
export const changeHeader = (newHeader) => {
  return {
    type: "CHANGE_NAME",
    payload: { newHeader },
  };
};
export const addPerson = (person) => {
  return {
    type: "ADD_PERSON",
    payload: { person },
  };
};
export const deletePerson = (id) => {
  return {
    type: "DELETE",
    payload: { id },
  };
};

export const authenticate = (email, password) => (dispatch) => {
  dispatch({ type: "AUTH" });
  return axios
    .post("https://jsonplaceholder.typicode.com/users", { email, password })
    .then((res) => {
      // console.log(res);
      dispatch({ type: "SUCCESS", payload: { res } });
    })
    .catch((err) => {
      // console.log(err);
      dispatch({ type: "FAIL" });
    });
};

export const down = () => (dispatch) => {
  dispatch({ type: "DOWN" });
  return axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    dispatch({ type: "DOWNSUC", payload: { res } });
  });
};
