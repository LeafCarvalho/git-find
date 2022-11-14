import styled from 'styled-components'

export const ButtonContainer = styled.div`
        text-align: center;

        button {
            height: 6vh;
            width: 26vh;
            font-size: 15px;
            font-weight: 400;
            background-color: #fff;
            color: #6a5acd;
            border: 1px solid #9966cc;
            border-radius: 4px;
            cursor: pointer;

            &:hover{
                color: #9959d9;
                background-color: #191919;
            }
        }
    `