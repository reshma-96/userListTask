export const userInitialState = {
  users: [],
  button: false
}

export function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case 'BUTTON_ACTION':
      return {
        ...state, ...{ button: action.payload.button }
      }
    case 'USERS':
      return {
        ...state, ...{ users: action.payload.users }
      }
    case 'NEW_USERS':
      let array = state.users;
      let array2 = array.map(eachUser => {
        var returnValue = { ...eachUser };
        if (eachUser.id == action.payload.id) {
          returnValue.name = action.payload.users;
        }
        return returnValue
      })
      return {
        ...state, ...{ users: array2 }
      }
    case 'NEW_EMAIL_USERS':
      let arrayUser = state.users;
      let arrayEmail = arrayUser.map(eachUser => {
        var returnValue = { ...eachUser };
        if (eachUser.id == action.payload.id) {
          returnValue.email = action.payload.users;
        }
        return returnValue
      })
      return {
        ...state, ...{ users: arrayEmail }
      }
    default:
      return state;
  }
}