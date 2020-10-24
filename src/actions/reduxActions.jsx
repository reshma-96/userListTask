export const updateUsers = users => {
  return {
    type: 'USERS',
    payload: {
      users
    }
  }
}

export const newUserList = (id, name, target) => {
  return {
    type: 'NEW_USERS',
    payload: {
      id: id,
      users: name
    }
  }
}

export const newEmailList = (id, email) => {
  return {
    type: 'NEW_EMAIL_USERS',
    payload: {
      id: id,
      users: email
    }
  }
}

export const buttonAction = (id, email) => {
  return {
    type: 'BUTTON_ACTION',
    payload: {
      button: true
    }
  }
}