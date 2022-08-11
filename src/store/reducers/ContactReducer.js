const INITIAL_STATE = {
  listContactsOfPerson: null,
  contactDatasForUpdate: null,
  isUpdate: false,
}

export const ContactReducer = (state = INITIAL_STATE, action) => {

  switch(action.type) {  
    case "contact/setContactPerson":
      return {
        ...state,
        listContactsOfPerson: action.listContactsOfPerson,
      }

    case "contact/contactDatasUpdate":
      return {
        ...state,
        contactDatasForUpdate: action.contactDatasForUpdate,
        isUpdate: true,
        loading: false
      }

    case "contact/notIsUpdate":
      return {
        ...state,
        isUpdate: false
      }

    default: 
      return state
  }
}