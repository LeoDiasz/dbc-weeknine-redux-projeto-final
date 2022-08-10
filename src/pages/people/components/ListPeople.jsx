import { PersonCardInfo } from "../../../components/PersonCardInfo"
import { ListContainer } from "../styles"

export const ListPeople = ({listPeopleDatas}) => {

  return (
    <ListContainer padding="40px 0" display="flex" direction="column" gap="20px">
      <h3>Lista pessoas</h3>

      {listPeopleDatas ? 
        <ul>
          <PersonCardInfo person={{nome: "Nome", email: "Email", dataNascimento: "Data nascimento", cpf: "Cpf"}} notButtons/>
          {listPeopleDatas.map((person, i) => (
            <PersonCardInfo key={i} person={person}/>
          ))}
        </ul> 

      : <h2>Nenhuma pessoa cadastrada</h2>}
    </ListContainer >
  )
}
