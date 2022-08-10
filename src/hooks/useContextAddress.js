import { useContext } from "react"
import { AddressContext } from "../context/AddressContext"

export const useContextAddress = () => {

  const context = useContext(AddressContext)

  return context
}