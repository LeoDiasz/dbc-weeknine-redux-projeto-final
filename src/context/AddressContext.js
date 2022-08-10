import {createContext, useState} from "react"
import {useNavigate} from "react-router-dom"
import {toast} from "react-hot-toast"
import {api} from "../services/api"
import { formatDataForOnlyNumbers } from "../utils/formatDatas"

const AddressContext = createContext()

const AddressProvider = ({children}) => {
  const [listAddressOfPerson, setListAddressOfPerson] = useState() 
  const [addressDatasUpdate, setAddressDatasUpdate] = useState()
  const navigate = useNavigate()

  const getAddressByIdPerson = async (idPerson, setListAddress = setListAddressOfPerson) => {

    try {
      const {data: listAddress} = await api.get(`endereco/retorna-por-id-pessoa?idPessoa=${idPerson}`)
  
      setListAddress(listAddress)
  
    } catch(Error){
      console.log(Error)
    }
  }
  
  const getAddressById = async (idAddress, setState = setAddressDatasUpdate) => {

    try {
      const {data: datasAddress} = await api.get(`endereco/${idAddress}`)
  
      setState(datasAddress)
  
    } catch(Error){
      console.log(Error)
    }
  }

  const handleCreateAddress = async (addressDatas, idPerson) => {

    if (!addressDatas) {
      return
    }

    addressDatas.cep = formatDataForOnlyNumbers(addressDatas.cep)
    addressDatas.tipo = addressDatas.tipo.toUpperCase()

    try {
      await api.post(`/endereco/{idPessoa}?idPessoa=${idPerson}`, addressDatas)
      
      navigate(`/people/perfil/${idPerson}`)
      toast.success("Endereço cadastrado com sucesso")

    } catch(Error) {
      toast.error("Não foi possivel cadastrar o endereço")
    }
  
    
  }

  const handleUpdateAddress = async (datasUpdates, idAddress, idPerson) => {

    if (!datasUpdates) {
      return
    }

    datasUpdates.cep = formatDataForOnlyNumbers(datasUpdates.cep)
    datasUpdates.tipo = datasUpdates.tipo.toUpperCase()

    try {
      await api.put(`/endereco/${idAddress}`, datasUpdates)

      toast.success("Endereço atualizado com sucesso!")
      navigate(`/people/perfil/${idPerson}`)
      
    } catch(error) {
      toast.error("Erro ao atualizar endereço.")

    }
  }

  const handleDeleteAddress = async (idAddress, idPerson) => {
    if(!idAddress) {
      return
    }

    try {
      
      await api.delete(`/endereco/${idAddress}`)
      toast.success("Endereço excluido com sucesso.")

      if (idPerson) {
        getAddressByIdPerson(idPerson)
      }
    
    } catch {
      toast.error("Não foi possivel deletar")
    }
  }

  return (
    <AddressContext.Provider value={{
      getAddressByIdPerson,
      getAddressById,
      addressDatasUpdate,
      listAddressOfPerson, 
      handleCreateAddress, 
      handleDeleteAddress, 
      handleUpdateAddress
      }}>
      {children}
    </AddressContext.Provider>
  )
}


export {AddressProvider, AddressContext}