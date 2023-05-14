import { Titulo } from "../Titulo"
import { livros } from "./dadosUltimosLancamentos"
import styled from "styled-components"

const UltimosLancamentosContainer = styled.section`
  background-color: #EBECEE;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo
        cor="#EB9B00"
        tamanhoFonte="36px"
      >Últimos lançamentos</Titulo>
      <NovosLivrosContainer>
        {livros.map(livros => (
          <img src={livros.src} alt={livros.name}/>
        ))}
      </NovosLivrosContainer>
    </UltimosLancamentosContainer>
  )
}

export default UltimosLancamentos
