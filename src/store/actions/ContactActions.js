import { toast } from "react-hot-toast"
import { api } from "../../services/api"

const getContactById = async (idContact, idPerson, dispatch) => {

  const {data: listContacts} = await api.get(`/contato/${idPerson}`)

  const contactDatas = listContacts.filter(contact => contact.idContato == idContact)

  const setContact = {type: "contact/contactDatasUpdate", contactDatasForUpdate: contactDatas[0]}
    
  dispatch(setContact)

}

const getContactsByIdPerson = async (idPerson, dispatch) => {

  try {
    const {data: listContactsPerson} = await api.get(`/contato/${idPerson}`)

    const setContactDatasUpdate = {type: "contact/setContactPerson", listContactsOfPerson: listContactsPerson }
    
    dispatch(setContactDatasUpdate)
  
  } catch(Error){
    console.log(Error)
  }

}

const handleCreateContact = async (contactsDatas, idPerson, navigate) => {

  if (!contactsDatas) {
    return
  }

  try {
    await api.post(`/contato/${idPerson}`, contactsDatas)
    
    toast.success("Contato cadastrado com sucesso")
    navigate(`/people/perfil/${idPerson}`)
  } catch(Error) {
    toast.error("Não foi possivel cadastrar esse contato")

  }
  
}

const handleUpdateContact = async (datasUpdates, idContact, idPerson, navigate) => {

  if (!datasUpdates) {
    return
  }

  try {
    await api.put(`/contato/${idContact}`, datasUpdates)

    toast.success("Contato atualizado com sucesso!")
    navigate(`/people/perfil/${idPerson}`)
    
  } catch(error) {
    toast.error("Erro ao atualizar o contato.")

  }
}

const handleDeleteContact = async (idContact, idPerson, dispatch) => {

  if(!idContact) {
    return
  }

  try {
    
    await api.delete(`/contato/${idContact}`)
    toast.success("contato excluido com sucesso.")

    if (idPerson) {
      getContactsByIdPerson(idPerson, dispatch)
    }
  
  } catch {
    toast.error("Não foi possivel deletar")
  }
}

export {getContactById, getContactsByIdPerson, handleCreateContact, handleUpdateContact, handleDeleteContact}


