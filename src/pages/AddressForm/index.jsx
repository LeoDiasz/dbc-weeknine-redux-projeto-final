import {useEffect, useState} from "react"
import {useParams, useNavigate} from "react-router-dom"
import { useContextAddress } from "../../hooks/useContextAddress"
import { ContainerPagesWithSideBar } from "../../components/ContainerPagesWithSideBar"
import { HeaderPages } from "../../components/HeaderPages/styles"
import { Button } from "../../components/Button/styles"
import { Loading } from "../../components/Loading"
import { FormAddress } from "./components/FormAddress"

export const AddressForm = () => {
  const {id} = useParams()
  const {idAddress} = useParams()
  const navigate = useNavigate()
  const [isUpdate, setIsUpdate] = useState(false)
  const [loading, setLoading] = useState(true)
  const [addressDatasUpdate, setAddressDatasUpdate] = useState()
  const {getAddressById} = useContextAddress()

  
  const setup = async () => {
    if (id && idAddress) {
      setIsUpdate(true)

      try {
        await getAddressById(idAddress, setAddressDatasUpdate)
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
      <FormAddress addressDatasUpdate={addressDatasUpdate} isUpdate={isUpdate}/>
    </ContainerPagesWithSideBar>
  )
}
