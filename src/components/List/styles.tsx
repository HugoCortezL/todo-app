import styled from 'styled-components'

export const Container = styled.div`
    padding: 15px;
    width: 75%;
    margin: 80px auto 30px auto;
    background-color: #FFFFFF;
    box-shadow: 1px 3px 12px 2px rgba(0,0,0,0.30);
    border-radius: 10px;
    overflow: hidden;
`

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
    position: relative;
    @media (max-width: 670px) {
        justify-content: flex-start;
    }
    input{
        display: block;
        width: 800px;
        padding: 5px 7px;
        font-size: 20px;
        font-weight: 500;
        border: 1.5px solid #C3c3c3;
        background-color: var(--white);
        box-shadow: inset 0 1px 4px rgb(0 0 0 / 10%), 0 0 0 transparent;
        border-radius: 6px;
        @media (max-width: 1330px) {
            width: 700px;
        }
        @media (max-width: 1200px) {
            width: 600px;
        }
        @media (max-width: 1060px) {
            width: 500px;
        }
        @media (max-width: 930px) {
            width: 400px;
        }
        @media (max-width: 830px) {
            width: 300px;
        }
        @media (max-width: 670px) {
            width: 400px;
        }
        @media (max-width: 630px) {
            width: 350px;
        }
        @media (max-width: 560px) {
            width: 300px;
        }
        @media (max-width: 497px) {
            width: 250px;
        }
        @media (max-width: 428px) {
            width: 200px;
        }
    }
    button{
        position: absolute;
        top: 0;
        right: 45px;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        background-color: var(--white);
        box-shadow: 1px 2px 8px 1px rgba(0,0,0,0.4);
        &:hover{
            box-shadow: 1px 1px 8px 0px rgba(0,0,0,0.4);
        }
        &:active{
            box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.35);
        }
        @media (max-width: 670px) {
            right: 0px;
        }
    }
`