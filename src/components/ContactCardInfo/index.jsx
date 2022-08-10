import {useNavigate} from "react-router-dom"
import {useState} from "react"
import {RiDeleteBinLine, RiEditBoxLine} from "react-icons/ri"
import { ModalDelete } from "../ModalDelete"
import { useContextContact } from "../../hooks/useContextContact"
import { ListContactsContainer } from "./styles"
import { ButtonWithIcon } from "../Button/styles"

export const ContactCardInfo = ({contactDatas, notButtons, idPerson}) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const {handleDeleteContact} = useContextContact()
  const navigate = useNavigate()

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  const handleOpenModal = () => {
    setIsOpenModal(true)
  }

  return (
    <ListContactsContainer>
      <h4>{contactDatas.telefone}</h4>
      <h4>{contactDatas.descricao}</h4>
      <h4>{contactDatas.tipoContato}</h4>
    
      
      {!notButtons && 
      <div>
        <ButtonWithIcon backgroundColor="#29CC97" onClick={event => navigate(`/contact/update/${idPerson}/${contactDatas.idContato}`)}>
          <RiEditBoxLine/>
        </ButtonWithIcon>
        <ButtonWithIcon backgroundColor="#F12B2C" onClick={handleOpenModal}>
          <RiDeleteBinLine/>
        </ButtonWithIcon>
      </div>}

      <ModalDelete isOpen={isOpenModal} handleCloseModal={handleCloseModal} setIsOpen={setIsOpenModal} handleDelete={handleDeleteContact} idDelete={contactDatas.idContato} idExtra={idPerson}/>
    </ListContactsContainer>
  )
}