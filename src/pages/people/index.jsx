import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import { ListPeople } from "./components/ListPeople";
import { ContainerPagesWithSideBar } from "../../components/ContainerPagesWithSideBar";
import { HeaderPages } from "../../components/HeaderPages/styles";
import { Button } from "../../components/Button/styles";
import { Loading } from "../../components/Loading";
import * as PeopleActions from "../../store/actions/PeopleAction"
import { useSelector, useDispatch } from "react-redux";

export const People = () => {
  const dispatch = useDispatch()
  const listPeople = useSelector(state => state.PeopleReducer.listPeople)
  const loading = useSelector(state => state.PeopleReducer.loading)
  const navigate = useNavigate()

  const setup = async () => {
    await PeopleActions.getPeople(dispatch)
  }
  
  useEffect(() => {
    setup()
  }, [])


  if (loading) {
    return (
      <Loading/>
    )
  }


  return (
    <ContainerPagesWithSideBar isMain>
      <HeaderPages>
        <h2>Pessoas</h2>
        <Button width="150px" onClick={event => navigate("/people/create")}>Cadastrar pessoas</Button>
      </HeaderPages>
      {listPeople && <ListPeople listPeopleDatas={listPeople}/>}
    </ContainerPagesWithSideBar>
  )
}
