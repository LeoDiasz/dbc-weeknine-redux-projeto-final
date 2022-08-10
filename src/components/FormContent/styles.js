import styled from "styled-components"
import {Form} from "formik"

const FormContent = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: ${props => props.align && props.align};

  div {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  button {
    align-self: center;
  }
`

export {FormContent}