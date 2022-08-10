import {BrowserRouter, Routes, Route} from "react-router-dom"
import {AddressProvider} from "./context/AddressContext"
import { ContactProvider } from "./context/ContactContext"
import { Login } from "./pages/Login"
import { CreateUser } from "./pages/CreateUser"
import { People } from "./pages/people"
import { PeopleForm } from "./pages/people/PeopleForm"
import { PeoplePerfil } from "./pages/people/PeoplePerfil"
import { NotFound } from "./pages/NotFound"
import { AddressForm } from "./pages/AddressForm"
import { ContactForm } from "./pages/ContactForm"
import { useEffect } from "react"
import * as AuthActions from "./store/actions/AuthAction"
import { Loading } from "./components/Loading"
import PrivateRoute from "./components/PrivateRoute"
import { useDispatch, useSelector } from "react-redux"

const Routers = () => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.AuthReducer.loading)

  useEffect(() => {
    AuthActions.isAuth(dispatch)
  }, [])

  if(loading) {
    return (
      <Loading/>
    )
  }

  return (
    <BrowserRouter>
      <AddressProvider>
        <ContactProvider>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<CreateUser/>}/>
            <Route element={<PrivateRoute/>}>
                <Route path="/people" element={<People/>}/>
                <Route path="/people/create" element={<PeopleForm/>}/>
                <Route path="/people/update/:id" element={<PeopleForm/>}/>
                <Route path="/people/perfil/:id" element={<PeoplePerfil/>}/>
                <Route path="/address/update/:id/:idAddress" element={<AddressForm/>}/>
                <Route path="/address/create/:id" element={<AddressForm/>}/>
                <Route path="/contact/create/:id" element={<ContactForm/>}/>
                <Route path="/contact/update/:id/:idContact" element={<ContactForm/>}/>
            </Route>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </ContactProvider>
      </AddressProvider>
    </BrowserRouter>
    
  )
}



export default Routers
