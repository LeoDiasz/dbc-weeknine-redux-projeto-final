import {useParams, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import { ContainerPagesWithSideBar } from "../../components/ContainerPagesWithSideBar"
import { FormContact } from "./components/FormContact"
import { Loading } from "../../components/Loading"
import { HeaderPages } from "../../components/HeaderPages/styles"
import { Button } from "../../components/Button/styles"
import * as ContactActions from "../../store/actions/ContactActions"
import { useDispatch, useSelector } from "react-redux"

export const ContactForm = () => {
  const {id} = useParams()
  const {idContact} = useParams()
  const navigate = useNavigate()
  const [isUpdate, setIsUpdate] = useState(false)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const contactDatasForUpdate = useSelector(state => state.ContactReducer.contactDatasForUpdate)

  
  const setup = async () => {
    if (id && idContact) {
      setIsUpdate(true)

      try {
        await ContactActions.getContactById(idContact, id, dispatch)
      } catch(Error) {
        console.log(Error)
      }
    }

    setLoading(false)
  } 

  useEffect(() => { 
      setup()
  }, [])

  if (loading) {
    return (
      <Loading/>
    )
  }

  return (
    <ContainerPagesWithSideBar gap="30px">
      <HeaderPages justifyContent="flex-end" >
        <Button onClick={event => navigate(`/people/perfil/${id}`)}>Voltar</Button>
      </HeaderPages>
      <FormContact contactDatasUpdate={contactDatasForUpdate} isUpdate={isUpdate}/>
    </ContainerPagesWithSideBar>
  )
}