import styled from 'styled-components'

export const ButtonContainer = styled.div`
        display: flex;
    justify-content: center;
    align-items: center;

button {
    height: 50px;
    width: 200px;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    background-color: #ccc;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #000;
    }
}

    `