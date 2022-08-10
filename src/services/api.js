import axios from "axios"

export const api = axios.create({
  baseURL: "https://dbc-pessoa-api.herokuapp.com"

})