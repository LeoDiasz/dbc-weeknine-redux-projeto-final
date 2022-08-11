import Modal from "react-modal"
import { Button } from "../Button/styles";
import {ModalStyles} from "./styles"
import {useDispatch} from "react-redux"

Modal.setAppElement("#root")

const ModalDelete = ({isOpen, setIsOpen, handleDelete, idDelete, idExtra}) => {
  const dispatch = useDispatch()

  const handleDeleteButton = async () => {
    idExtra ? await handleDelete(idDelete, idExtra, dispatch) : await handleDelete(idDelete, dispatch)
    setIsOpen(false)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <ModalStyles
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <h3>Tem certeza que deseja deletar?</h3>
      <div>
        <Button backgroundColor="red" onClick={handleCloseModal}>
          Não
        </Button>
        <Button backgroundColor="green" onClick={handleDeleteButton}>
          Sim
        </Button>
      </div>
    </ModalStyles>
  );
}

export {ModalDelete};