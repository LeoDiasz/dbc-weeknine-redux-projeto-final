const INITIAL_STATE = {
  listAddressOfPerson: null,
  addressDatasUpdate: null,
}


export const AddressReducer = (state = INITIAL_STATE, action) => {

  switch(action.type) {  
    case "address/setAddressPerson":
      return {
        ...state,
        listAddressOfPerson: action.listAddressOfPerson,
      }

    case "address/addressDatasUpdate":
      return {
        ...state,
        addressDatasUpdate: action.addressDatasUpdate,
        isUpdate: true,
        loading: false
      }

    case "address/notIsUpdate":
      return {
        ...state,
        isUpdate: false
      }

    default: 
      return state
  }
}