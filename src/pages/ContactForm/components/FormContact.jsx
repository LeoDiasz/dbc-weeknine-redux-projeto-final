import {Formik} from "formik"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useContextContact } from "../../../hooks/useContextContact"
import { maskPhone } from "../../../utils/masks"
import { ContactSchema } from "../../../utils/validations"
import { Label, MaskInput, InputField, SelectInput, TextValidation } from "../../../components/Input/styles"
import { Button } from "../../../components/Button/styles"
import { ContainerForFormAndLists } from "../../../components/ContainerForFormAndLists/styles"
import { FormContent } from "../../../components/FormContent/styles"

export const FormContact = ({isUpdate, contactDatasUpdate}) => {
  const {id} = useParams()
  const {idContact} = useParams()
  const {handleCreateContact , handleUpdateContact} = useContextContact()

  useEffect(() => {

  }, [contactDatasUpdate])

  if(!contactDatasUpdate && isUpdate) {
    return
  }

  const contactDatas = contactDatasUpdate && contactDatasUpdate

  return (
    <ContainerForFormAndLists display="flex" direction="column" gap="30px">
      <h2>{isUpdate ? "Atualizar contato" : "Criar contato" }</h2>
      <Formik
        initialValues={{
          idPessoa: parseInt(id),
          tipoContato: contactDatas && isUpdate ? contactDatas.cidade : "RESIDENCIAL",
          telefone: contactDatas && isUpdate ? contactDatas.telefone : "",
          descricao: contactDatas && isUpdate ? contactDatas.descricao : "",
        }}
        validationSchema={ContactSchema}
        onSubmit={async (values, {resetForm}) => {
            isUpdate ? await handleUpdateContact(values, idContact, id) : await handleCreateContact(values, id)
            resetForm()
        }}>
        {({errors, values, handleChange, setFieldValue }) => (
          <FormContent>
            <div>
              <Label htmlFor="telefone">Telefone *</Label>
              <MaskInput mask={maskPhone} name="telefone" id="telefone" placeholder="Digite seu telefone" value={values.telefone} onChange={handleChange}/>
              <TextValidation>{errors.telefone}</TextValidation>
            </div>
      
            <div>
              <Label htmlFor="descricao">Descrição *</Label>
              <InputField name="descricao" placeholder="Digite a descrição"/>
              <TextValidation>{errors.descricao}</TextValidation>
            </div>
      
            <div>
              <Label htmlFor="tipoContato">Tipo *</Label>
              <SelectInput name="tipoContato" id="tipoContato"  value={values.tipoContato} onChange={handleChange}>
                <option value="RESIDENCIAL">residencial</option>
                <option value="COMERCIAL">comercial</option>
              </SelectInput>
              <TextValidation>{errors.tipoContato}</TextValidation>
            </div>

            <Button type="submit" disabled={Object.values(errors).length > 0}>{isUpdate ? "Atualizar contato" : "Criar contato"}</Button>
          </FormContent>
        )}
      </Formik>
    </ContainerForFormAndLists>
  )
}