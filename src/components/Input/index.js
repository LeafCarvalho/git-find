import React from 'react'

import { InputContainer } from './style'

const Input = ({value, onChange}) => {
  return (
    <InputContainer>
        <input placeholder='Digite o nome e repositório' value={value || ''} onChange={onChange}/>
    </InputContainer>
  )
}

export default Input