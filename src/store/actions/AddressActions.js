import {toast} from "react-hot-toast"
import {api} from "../../services/api"
import { formatDataForOnlyNumbers } from "../../utils/formatDatas"

const getAddressByIdPerson = async (idPerson, dispatch) => {

  try {
    const {data: listAddress} = await api.get(`endereco/retorna-por-id-pessoa?idPessoa=${idPerson}`)

    const setAddress = {type: "address/setAddressPerson", listAddressOfPerson: listAddress }
    
    dispatch(setAddress)

  } catch(Error){
    console.log(Error)
  }
}

const getAddressById = async (idAddress, dispatch) => {

  try {
    const {data: datasAddress} = await api.get(`endereco/${idAddress}`)

    const setAddressDatasUpdate = {type: "address/addressDatasUpdate", addressDatasUpdate: datasAddress}

    dispatch(setAddressDatasUpdate)

  } catch(Error){
    console.log(Error)
  }
}

const handleCreateAddress = async (addressDatas, idPerson, navigate) => {

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

const handleUpdateAddress = async (datasUpdates, idAddress, idPerson, navigate) => {

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

const handleDeleteAddress = async (idAddress, idPerson, dispatch) => {
  if(!idAddress) {
    return
  }

  try {
    
    await api.delete(`/endereco/${idAddress}`)
    toast.success("Endereço excluido com sucesso.")

    if (idPerson) {
      getAddressByIdPerson(idPerson, dispatch)
    }
  
  } catch {
    toast.error("Não foi possivel deletar")
  }
}

export {handleCreateAddress, handleUpdateAddress, handleDeleteAddress, getAddressById, getAddressByIdPerson}