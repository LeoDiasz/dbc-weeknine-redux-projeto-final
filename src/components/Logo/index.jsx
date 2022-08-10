import { Link } from "react-router-dom"
import logoImg from "../../images/logo.png"
import logoImgText from "../../images/logo-text.png"
import {LogoContent} from "./styles"
import { useSelector } from "react-redux"

export const Logo = ({isWithText}) => {
  const token = useSelector(state => state.AuthReducer.token)
  
  return (
    <Link to={token ? "/people" : "/"}>
      <LogoContent src={isWithText ? logoImgText : logoImg} alt="logo" isWithText={isWithText}/>
    </Link>
  )
}


