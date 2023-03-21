import styled from 'styled-components'

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;

input {
    width: 300px;
    height: 30px;
    border-radius: 8px;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    transition: all 0.2s ease-in-out;

    &:focus {
        border-color: #9966cc;
        box-shadow: 0 0 5px #9966cc;
    }
    &:invalid {
        border-color: red;
    }
    &::placeholder {
        color: #ccc;
    }
}

    `