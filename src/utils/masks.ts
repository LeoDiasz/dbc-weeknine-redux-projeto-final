const maskOnlyNumbers = /[^0-9]/gi
const maskCpf = [/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, "-", /\d/, /\d/]
const maskDate = [/[0-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
const maskCep = [/[0-9]/, /\d/, /\d/, /\d/, /\d/,  '-', /\d/, /\d/, /\d/]
const maskPhone = ["(", /[0-9]/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

export {maskOnlyNumbers, maskCpf, maskDate, maskCep, maskPhone}
