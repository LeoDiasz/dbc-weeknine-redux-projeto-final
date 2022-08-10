import {useNavigate} from "react-router-dom"
import { ContactCardInfo } from "../../../components/ContactCardInfo"
import { ListContainer } from "../../people/styles"
import { Button } from "../../../components/Button/styles"

export const ListContact = ({listContacts, id}) => {
  const navigate = useNavigate()

  return (
    <ListContainer padding="40px 0" display="flex" direction="column" gap="30px">
      <h3>Lista Contatos</h3>
      
      <div>
        <ContactCardInfo notButtons contactDatas={{
          telefone: "Telefone", 
          descricao: "Descrição", 
          tipoContato: "Tipo contato"
        }}/>
        {listContacts.length ? listContacts.map((contact, i) => (
          <ContactCardInfo contactDatas={contact} idPerson={id} key={i}/>
        )) : <h2>Nenhum contato cadastrado</h2>}
      </div>
       <Button alignSelf="center" onClick={event => navigate(`/contact/create/${id}`)}>Adicionar Contatos</Button>
    </ListContainer>
  )
}
