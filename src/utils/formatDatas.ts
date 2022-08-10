import moment from "moment"
import "moment/locale/pt-br"
import { maskOnlyNumbers } from "./masks"

const formatDateDefaultForPtBr = (date: string) => {
  const dateFormated = moment(date, "YYYY-MM-DD").format("DD/MM/YYYY")
  
  return dateFormated
}

const formatDatePtBrForDefault = (date: string) => {
  const dateFormated = moment(date, "DD/MM/YYYY").format("YYYY-MM-DD")
  
  return dateFormated
}

const formatDataForOnlyNumbers = (data: string) => {
  if (!data) {
    return
  }
  
  const newData = data.replace(maskOnlyNumbers, "")

  return newData
}

const formatDateExtended = (date: string) => {
  moment.locale("pt-br")
  const newDate = moment(date).format("LL")

  return newDate
}

const formatCpfWithCaracteres = (data: string) : string=> {
  return data.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
}

const formatCepWithCaracteres = (data: string) : string=> {
  return data.replace(/(\d{5})(\d{3})/, "$1-$2")
}


export {formatDateDefaultForPtBr, formatDatePtBrForDefault, formatDateExtended, formatDataForOnlyNumbers, formatCepWithCaracteres, formatCpfWithCaracteres}

