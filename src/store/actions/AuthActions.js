import {toast} from "react-hot-toast"
import {api} from "../../services/api"

const signIn = async (userDatas, navigate, dispatch) => {
    
  try {  
    const {data: token} = await api.post("/auth", userDatas)

    localStorage.setItem("token", token)
   
    api.defaults.headers.common["authorization"] = token

    toast.success("Seja bem vindo!")

    dispatch({type: "auth/signIn",token: token})
    
    navigate("/people")
    

  } catch(Error) {
    toast.error("Erro de login. Email ou senha invalido.")
  }

}

const signOut = (navigate, dispatch) => {
  localStorage.removeItem("token")
  
  api.defaults.headers.common["authorization"] = undefined
  toast("Até logo!")
  
  dispatch({
    type: "auth/signOut"
  })
  
  navigate("/")
}

const isAuth = (dispatch) => {

  const token = localStorage.getItem("token")

  if (token) {
    api.defaults.headers.common["authorization"] = token

    const locationNow = window.location.href
  
    if(locationNow === "http://localhost:3000/"){
      // navigate("/people")
      window.location.href = "http://localhost:3000/people"
    }

    dispatch({
      type: "auth/isAuth",
      token: token,
    }) 
  }

  dispatch({
    type: "auth/isLoading"
  })

}

export {signIn, signOut, isAuth}









  

