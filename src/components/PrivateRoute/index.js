import {Navigate, Outlet} from "react-router-dom"
import { useSelector } from "react-redux"

const PrivateRoute = () => {
  const token = useSelector(state => state.AuthReducer.token)

  return (
    token ? <Outlet/> : <Navigate to="/"/>
  )
}

export default PrivateRoute