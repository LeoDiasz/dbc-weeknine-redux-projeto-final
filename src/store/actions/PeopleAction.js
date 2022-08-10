import { api } from "../../services/api"
import {toast} from "react-hot-toast"
import { formatDatePtBrForDefault, formatDateDefaultForPtBr, formatDataForOnlyNumbers } from "../../utils/formatDatas"

const getPeople = async(dispatch) => {

  try {
    const {data: {content}} = await api.get("/pessoa")

    const setPeople = {type: "people/setPeople", listPeople: content}

    dispatch(setPeople)
  
  } catch(Error) {
    console.log(Error)

  }

}

const getPersonById = async (id, dispatch) => {
    
  try {
    const {data: [personDatas]} = await api.get(`/pessoa/lista-completa?idPessoa=${id}`)
    
    personDatas.dataNascimento = formatDateDefaultForPtBr(personDatas.dataNascimento)

    const {cpf, email, dataNascimento, nome, idPessoa} = personDatas
    const personDatasFiltered = {cpf, email, dataNascimento, nome, idPessoa}

    const setPersonDatasUpdate = {type: "people/personDatasUpdate", personDatas: personDatasFiltered}
    
    dispatch(setPersonDatasUpdate)
    
  } catch {
    toast.error("Não foi possivel encontrar essa pessoa")
  }

}

const handleCreatePerson = async (personDatas, navigate) => {

  if (!personDatas) {
    return
  }
  
  personDatas.cpf = formatDataForOnlyNumbers(personDatas.cpf)
  personDatas.dataNascimento = formatDatePtBrForDefault(personDatas.dataNascimento)

  const {email, dataNascimento, nome, cpf} = personDatas
  const personDatasFiltered = {email, dataNascimento, nome, cpf}
  
  try {
    await api.post("/pessoa", personDatasFiltered)
    
    navigate("/people")
    toast.success("Pessoa cadastrada com sucesso")

  } catch(Error) {
    toast.error("Não foi possivel cadastrar o usuário")
  }
}

const handleDeletePerson = async (id, dispatch) => {

  if(!id) {
    return
  }

  try {
    
    await api.delete(`/pessoa/${id}`)

    getPeople(dispatch)
    toast.success("Pessoa deletada com sucesso.")

  } catch {
    toast.error("Não foi possivel deletar")
  }

}

const handleUpdatePerson = async (personDatas, navigate) => {

  if (!personDatas) {
    return
  }

  personDatas.cpf = formatDataForOnlyNumbers(personDatas.cpf)
  personDatas.dataNascimento = formatDatePtBrForDefault(personDatas.dataNascimento)
  
  const {idPessoa, dataNascimento, email, nome, cpf} = personDatas
  const personDatasForUpdate = {dataNascimento, email, nome, cpf} 

  try {
    await api.put(`/pessoa/${idPessoa}`, personDatasForUpdate)
    
    navigate("/people")
    toast.success("Pessoa atualizada com sucesso")

  } catch(error) {
    toast.error("Erro ao atualizar")

   } 
  
}

export {getPeople, getPersonById, handleCreatePerson, handleDeletePerson, handleUpdatePerson}