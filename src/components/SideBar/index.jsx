import { Link } from "react-router-dom"
import {Logo} from "../Logo"
import { Button } from "../Button/styles"
import {NavContent, ListContent} from "./styles"
import * as AuthActions from "../../store/actions/AuthAction"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

export const SideBar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  return (
    <NavContent>
      <Logo isWithText/>
      <ListContent>
        <li><Link to="/people">Pessoas</Link></li>
      </ListContent>
      <Button width="200px" onClick={() => AuthActions.signOut(navigate, dispatch)}>Sair</Button>
    </NavContent>
  )
}
