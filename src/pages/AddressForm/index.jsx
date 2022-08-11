import {useEffect, useState} from "react"
import {useParams, useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { ContainerPagesWithSideBar } from "../../components/ContainerPagesWithSideBar"
import { HeaderPages } from "../../components/HeaderPages/styles"
import { Button } from "../../components/Button/styles"
import { Loading } from "../../components/Loading"
import { FormAddress } from "./components/FormAddress"
import * as AddressActions from "../../store/actions/AddressActions"

export const AddressForm = () => {
  const [loading, setLoading] = useState(true)
  const {id} = useParams()
  const {idAddress} = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const addressDatasUpdate = useSelector(state => state.AddressReducer.addressDatasUpdate)
  const isUpdate = useSelector(state => state.AddressReducer.isUpdate)

  const setup = async () => {
    if (id && idAddress) {
      try {
        await AddressActions.getAddressById(idAddress, dispatch)
      } catch(Error) {
        console.log(Error)
      }

    } else {
      dispatch({type: "address/notIsUpdate"})
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
      <FormAddress addressDatasUpdate={addressDatasUpdate} isUpdate={isUpdate}/>
    </ContainerPagesWithSideBar>
  )
}
