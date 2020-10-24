import axios from "axios";

import {
  buttonAction,
  newEmailList,
  newUserList,
  updateUsers
} from "./reduxActions";

export const fetchUsers = url => {
  return dispatch => {
    axios.get(url)
      .then(response => {
        dispatch(updateUsers(response.data))
      })
      .catch(error => {
        console.log("error ", error)
      })
  }
}

export const updateNewUsers = (userId, name) => {
  return dispatch => {
    dispatch(newUserList(userId, name))
  }
}

export const updateEmail = (userId, email) => {
  return dispatch => {
    dispatch(newEmailList(userId, email))
  }
}

export const handleButton = () => {
  return dispatch => {
    dispatch(buttonAction(true))
  }
}