const INITIAL_STATE = {
  listPeople: null,
  personDatas: null,
  isUpdate: false,
  loading: true,
}

export const PeopleReducer = (state = INITIAL_STATE, action) => {
  
  switch(action.type) {
    
    case "people/setPeople":
      return {
        ...state,
        listPeople: action.listPeople,
        loading: false
      }

    case "people/personDatasUpdate":
      return {
        ...state,
        personDatas: action.personDatas,
        isUpdate: true,
        loading: false
      }

    case "people/notIsUpdate":
      return {
        ...state,
        isUpdate: false
      }

    case "people/isLoading":
      return {
        ...state,
        loading: true
      } 

    default: 
      return state
  }
}