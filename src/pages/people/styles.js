import styled from "styled-components"
import { FormContent } from "../../components/FormContent/styles"
import {ContainerForFormAndLists} from "../../components/ContainerForFormAndLists/styles"

const FormStyle = styled(FormContent)`
  input[id=cpf], input[id=dataNascimento] {
    width: 200px;
  }
`

const ListContainer = styled(ContainerForFormAndLists)`

  h3 {
    padding: 0 40px;
  }

  ul > li:first-child  h4 {
    font-weight: bold;
  }

  h2 {
    margin-top: 10px;
    text-align: center;
  }

  @media(max-width: 1080px) {
    text-align: center;
  }

`


export {FormStyle, ListContainer}