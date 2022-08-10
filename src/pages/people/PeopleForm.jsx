import {useEffect, useState} from "react"
import { useParams, useNavigate } from "react-router-dom"
import { FormPeople } from "./components/FormPeople"
import { HeaderPages } from "../../components/HeaderPages/styles"
import { Button } from "../../components/Button/styles"
import { ContainerPagesWithSideBar } from "../../components/ContainerPagesWithSideBar"
import { ContainerForFormAndLists } from "../../components/ContainerForFormAndLists/styles"
import { Loading } from "../../components/Loading"
import * as PeopleActions from "../../store/actions/PeopleAction"
import { useDispatch, useSelector } from "react-redux"

export const PeopleForm = () => {
  const dispatch = useDispatch()
  const personDatas = useSelector(state => state.PeopleReducer.personDatas)
  const isUpdate = useSelector(state => state.PeopleReducer.isUpdate)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const {id} = useParams()

  const setup = async () => {
    
    if (id) {
      try {
        await  PeopleActions.getPersonById(id, dispatch)
      } catch(Error) {
        console.log(Error)
      }
    } else {
      dispatch({type: "people/notIsUpdate"})
    }

    
    setLoading(false)
  }

  useEffect(() => {
    setup()

  }, [])

  if(loading) {
    return (
      <Loading/>
    )
  }
  
  return (
    <ContainerPagesWithSideBar gap="50px">
      <HeaderPages justifyContent="flex-end" >
        <Button onClick={event => navigate(`/people`)}>Voltar</Button>
      </HeaderPages>
      <ContainerForFormAndLists>
        <FormPeople personDatasUpdate={personDatas} isUpdate={isUpdate}/>
      </ContainerForFormAndLists>
    </ContainerPagesWithSideBar>
  )
}
