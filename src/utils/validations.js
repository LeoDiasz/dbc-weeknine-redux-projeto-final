import * as Yup from "yup"
import moment from "moment"
import { formatDataForOnlyNumbers } from "./formatDatas";

const CreateUserAndSignupSchema = Yup.object().shape({
  login: Yup.string()
    .min(4, 'Minimo 4 caracteres')
    .max(15, 'Maximo 15 caracteres!')
    .required('Necessário preencher'),
  senha: Yup.string()
    .min(2, 'Minimo 2 caracteres')
    .max(15, 'Maximo 15 caracteres!')
    .required('Necessário preencher')
});

const PersonSchema = Yup.object().shape({
  nome: Yup.string()
    .min(3, 'Minimo 3 caracteres')
    .max(20, 'Maximo 20 caracteres!')
    .required('Necessário preencher'),
  email: Yup.string()
    .min(5, 'Minimo 5 caracteres')
    .max(40, 'Maximo 40 caracteres!')
    .email("Email não é valido")
    .required('Necessário preencher'),
  dataNascimento: Yup.string()
  .required('Necessário preencher')
  .test("date", "data não é valida", date => (moment(date, "DD/MM/YYYY").isValid()) && String(formatDataForOnlyNumbers(date)).length >= 8),
  cpf: Yup.string()
    .test("cpf", "cpf tem que ter 11 digitos", cpf => String(formatDataForOnlyNumbers(cpf)).length >= 11)
    .required('Necessário preencher'),
});

const AddressSchema = Yup.object().shape({
  cep: Yup.string()
    .test("cep", "Cep tem que possuir 8 digitos", cep => String(formatDataForOnlyNumbers(cep)).length >= 8)
    .required('Necessário preencher'),
  logradouro: Yup.string()
    .required('Necessário preencher'),
  pais: Yup.string()
    .required('Necessário preencher'),
  estado: Yup.string()
  .required('Necessário preencher'),
  cidade: Yup.string()
  .required('Necessário preencher'),
  numero: Yup.string()
  .required('Necessário preencher'),
  tipo: Yup.string()
  .required('Necessário preencher'),
});

const ContactSchema = Yup.object().shape({
  telefone: Yup.string()
    .test("telefone", "telefone tem que possuir no minimo 9 numeros", telefone => String(formatDataForOnlyNumbers(telefone)).length >= 11)
    .required('Necessário preencher'),
  descricao: Yup.string()
    .max("20", "maximo 20 caracteres")
    .required('Necessário preencher'),
  tipoContato: Yup.string()
    .required('Necessário preencher'),
});


export {CreateUserAndSignupSchema, PersonSchema, AddressSchema, ContactSchema}