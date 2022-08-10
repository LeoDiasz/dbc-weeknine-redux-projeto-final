import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import { ContainerForFormAndLists } from "../ContainerForFormAndLists/styles";
import {SectionPagesLoginAndCreateUser, DivContainer, DivBanner} from "./styles"

export const ScreenLoginAndRegisterUser = ({children, titleForm, isScreenLogin}) => {

  return (
    <DivContainer>
      <DivBanner>
          <Logo isWithText/>
      </DivBanner>
      <SectionPagesLoginAndCreateUser>
        <ContainerForFormAndLists width="465px" height="582px" display="flex" direction="column" gap="30px">
          <Logo/>
          <div>
            <h1>{titleForm}</h1>
          </div>
          {children}
          {isScreenLogin ? 
            <Link to="/register">Não possui conta? <span>Criar</span></Link>
          :
            <Link to="/">Já possui conta? <span>Entrar</span></Link>
          }
        </ContainerForFormAndLists>
      </SectionPagesLoginAndCreateUser>
    </DivContainer>
  )
}