import React from 'react'

import { ButtonContainer } from './style'

const Button = ({onClick}) => {

  return (
    <ButtonContainer>
        <button onClick={onClick}>Pesquisar Repositório</button>
    </ButtonContainer>
  )
}

export default Button