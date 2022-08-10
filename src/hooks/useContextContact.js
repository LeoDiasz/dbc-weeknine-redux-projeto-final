import { useContext } from "react"
import { ContactContext } from "../context/ContactContext"

export const useContextContact = () => {

  const context = useContext(ContactContext)

  return context
}