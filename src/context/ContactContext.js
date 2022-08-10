import {createContext, useState} from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-hot-toast"
import { api } from "../services/api"

const ContactContext = createContext()

const ContactProvider = ({children}) => {
  const [contactDatasForUpdate, setContactDatasForUpdate] = useState()
  const [listContactsOfPerson, setListContactsOfPerson] = useState()
  const navigate = useNavigate()

  const getContactById = async (idContact, idPerson, setStateDatasContact = setContactDatasForUpdate) => {

    const {data: listContacts} = await api.get(`/contato/${idPerson}`)

    const contactDatas = listContacts.filter(contact => contact.idContato == idContact)

    setStateDatasContact(contactDatas[0])

  }

  const getContactsByIdPerson = async (idPerson, setStateListContactsPerson = setListContactsOfPerson) => {

    try {
      const {data: listContactsPerson} = await api.get(`/contato/${idPerson}`)
  
      setStateListContactsPerson(listContactsPerson)
    
    } catch(Error){
      console.log(Error)
    }

  }

  const handleCreateContact = async (contactsDatas, idPerson) => {

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

  const handleUpdateContact = async (datasUpdates, idContact, idPerson) => {

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

  const handleDeleteContact = async (idContact, idPerson) => {

    if(!idContact) {
      return
    }

    try {
      
      await api.delete(`/contato/${idContact}`)
      toast.success("contato excluido com sucesso.")

      if (idPerson) {
        getContactsByIdPerson(idPerson)
      }
    
    } catch {
      toast.error("Não foi possivel deletar")
    }
  }

  return (
    <ContactContext.Provider value={{
      getContactById, 
      getContactsByIdPerson, 
      handleCreateContact, 
      handleUpdateContact, 
      handleDeleteContact, 
      contactDatasForUpdate, 
      listContactsOfPerson}}>
      {children}
    </ContactContext.Provider>
  )
  
}

export {ContactProvider, ContactContext}


