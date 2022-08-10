import {Formik} from "formik"
import {toast} from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {api} from "../../services/api"
import { ScreenLoginAndRegisterUser } from "../../components/ScreenLoginAndRegisterUser";
import { CreateUserAndSignupSchema } from "../../utils/validations";
import { Button } from "../../components/Button/styles";
import { Label, TextValidation, InputField } from "../../components/Input/styles";
import { FormContent } from "../../components/FormContent/styles";


export const CreateUser = () => {
  const navigate = useNavigate()

  const createAccount = async (datasUser) => {

    try {
      await api.post("/auth/create", datasUser)

      navigate("/")
      toast.success("Usuário cadastrado com sucesso!")

    } catch(Error) {
      const {response} = Error
      toast.error(response.data.message ? response.data.message : "Não foi possivel cadastrar!")
    }

  }

  return (
    <ScreenLoginAndRegisterUser titleForm="Criar conta">
      <Formik
        initialValues={{
          login: '',
          senha: '',  
        }}
        validationSchema={CreateUserAndSignupSchema}
        onSubmit={values => {
          createAccount(values)
        }}>
        {({ errors}) => (
        <FormContent>
          <div>
            <Label htmlFor="login">Usuário</Label>
            <InputField name="login" id="login" placeholder="Nome usuário"/>
            <TextValidation>{errors.login}</TextValidation>
          </div>

          <div>
            <Label htmlFor="senha">Senha</Label>
            <InputField name="senha" id="senha" type="password" placeholder="Cadastrar senha"/>
            <TextValidation>{errors.senha}</TextValidation>
          </div>

          <Button width="100%" disabled={Object.values(errors).length > 0}>CRIAR</Button>
        </FormContent>
      )}
      </Formik>
    </ScreenLoginAndRegisterUser>
        
  )
}
