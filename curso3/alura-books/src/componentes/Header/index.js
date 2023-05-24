import Logo from "../Logo"
import IconesHeader from "../IconesHeader"
import OpcoesHeader from "../OpcoesHeader"
import styled from "styled-components"


const HeaderContainer = styled.header`
  justify-content: center;
  background-color: #FFF;
  display: flex;
`


function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </HeaderContainer>
  )
}

export default Header;
