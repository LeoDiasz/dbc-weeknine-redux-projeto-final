import styled, {css} from "styled-components"
import MaskedInput from "react-text-mask"
import { Field } from "formik"

const baseStyleInputs = css`
  width: 100%;
  min-height: 40px;
  padding: 0 20px;
  border-radius: 8px;
  margin-top: 10px;
  border: 1px solid var(--color-border);
  color: var(--color-text-gray-dark);

  &::placeholder {
    color: var(--color-text-gray-dark);
  }

`

const Input = styled.input`
  ${baseStyleInputs}
`

const MaskInput = styled(MaskedInput)`
  ${baseStyleInputs}
`

const InputField = styled(Field)`
  ${baseStyleInputs}
`

const SelectInput = styled.select`
  ${baseStyleInputs}
`

const Label = styled.label`
  color: var(--color-text-gray-dark);
`

const TextValidation = styled.span`
  margin-top: 10px;
  color: var(--color-text-error);
`

export {Label, Input, MaskInput, InputField, TextValidation, SelectInput}