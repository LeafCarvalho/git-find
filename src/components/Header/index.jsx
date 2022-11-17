import React from 'react'
import gitLogo from '../../assets/github.png'
import { HeaderContainer } from './style'

function Header() {
  return (
    <>
        <HeaderContainer>
            <img src={gitLogo} width="7%" alt="Imagem do Github" />
            <h1>Github</h1>
        </HeaderContainer>
    </>
  )
}

export default Header