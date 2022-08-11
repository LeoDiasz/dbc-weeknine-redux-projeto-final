import {Formik} from "formik"
import { ScreenLoginAndRegisterUser } from "../../components/ScreenLoginAndRegisterUser";
import { Button } from "../../components/Button/styles";
import {InputField, Label} from "../../components/Input/styles";
import { FormContent } from "../../components/FormContent/styles";
import {signIn} from "../../store/actions/AuthActions"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <ScreenLoginAndRegisterUser titleForm={"Entre em sua conta"} isScreenLogin>
      <Formik 
        initialValues={{login: '', senha: ''}} 
        onSubmit={values => signIn(values, navigate, dispatch)}
      >    
        {({ errors}) => (
          <FormContent>
            <div>
              <Label htmlFor="login">Usuário</Label>
              <InputField name="login" id="login" placeholder="Digite seu login"/>
            </div>

            <div>
              <Label htmlFor="senha">Senha</Label>
              <InputField name="senha" id="senha" type="password" placeholder="Digite sua senha"/>
            </div>

            <Button width="100%">ENTRAR</Button>
          </FormContent>
        )}
      </Formik>
    </ScreenLoginAndRegisterUser>
  )
}
