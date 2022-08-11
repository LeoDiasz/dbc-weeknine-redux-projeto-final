import {useEffect, useState} from "react"
import {useParams, useNavigate} from "react-router-dom"
import { Button } from "../../components/Button/styles"
import { Loading } from "../../components/Loading"
import { ContainerPagesWithSideBar } from "../../components/ContainerPagesWithSideBar"
import { HeaderPages } from "../../components/HeaderPages/styles"
import { ListAddress } from "../AddressForm/components/ListAddress"
import { ListContact } from "../ContactForm/components/ListContact"
import * as PeopleActions from "../../store/actions/PeopleActions"
import * as AddressActions from "../../store/actions/AddressActions"
import * as ContactActions from "../../store/actions/ContactActions"

import { useDispatch, useSelector } from "react-redux"

export const PeoplePerfil = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()
  const personDatas = useSelector(state => state.PeopleReducer.personDatas)
  const listAddressOfPerson = useSelector(state => state.AddressReducer.listAddressOfPerson)
  const listContactsOfPerson = useSelector(state => state.ContactReducer.listContactsOfPerson)

  const setup = async () => {
    await AddressActions.getAddressByIdPerson(id, dispatch)
    await PeopleActions.getPersonById(id, dispatch)
    await ContactActions.getContactsByIdPerson(id, dispatch)
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
    <ContainerPagesWithSideBar >
      <HeaderPages>
        {personDatas && <h3>Usuário: {personDatas.nome}</h3>}
        <Button onClick={event => navigate("/people")}>Voltar</Button>
      </HeaderPages>
      <ListAddress listAddress={listAddressOfPerson} id={id}/>
      <ListContact listContacts={listContactsOfPerson} id={id}/>
    </ContainerPagesWithSideBar>
  )
}
