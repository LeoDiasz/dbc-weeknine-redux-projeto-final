import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {RiDeleteBinLine, RiEditBoxLine} from "react-icons/ri"
import {ModalDelete} from "../../components/ModalDelete/index"
import { formatDateExtended, formatCpfWithCaracteres } from "../../utils/formatDatas"
import {PersonContent} from "./styles"
import { ButtonWithIcon } from "../Button/styles"
import * as PeopleActions from "../../store/actions/PeopleActions"

export const PersonCardInfo = ({person, notButtons}) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const dateBirth = formatDateExtended(person.dataNascimento)
  const navigate = useNavigate()

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  const handleOpenModal = () => {
    setIsOpenModal(true)
  }

  return (
    <PersonContent>
      <h4>{person.nome}</h4>
      <h4>{person.email}</h4>
      <h4>{formatCpfWithCaracteres(person.cpf)}</h4>
      <h4>{person.dataNascimento === "Data nascimento" ? "Data nascimento" : dateBirth}</h4>
      
      {!notButtons && 
        <div>
          <ButtonWithIcon width="80px" size="14px" onClick={event => navigate(`/people/perfil/${person.idPessoa}`)}>Detalhes</ButtonWithIcon>
          <ButtonWithIcon backgroundColor="#29CC97" onClick={event => navigate(`/people/update/${person.idPessoa}`)}>
            <RiEditBoxLine/>
          </ButtonWithIcon>
          <ButtonWithIcon backgroundColor="#F12B2C" onClick={handleOpenModal}>
            <RiDeleteBinLine/>
          </ButtonWithIcon>
        </div>}

      <ModalDelete isOpen={isOpenModal} handleCloseModal={handleCloseModal} handleDelete={PeopleActions.handleDeletePerson} idDelete={person.idPessoa} setIsOpen={setIsOpenModal}/>
    </PersonContent>
  )
}
