import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
`

export const ModalWrapper = styled.div`
    background-color: #FFFFFF;
    width: 800px;
    height: 500px;
    border-radius: 10px;
    padding: 10px;
    position: relative;
`

export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1{
        font-weight: 500;
        font-size: 35px;
    }
`

export const DescriptionContainer = styled.div`
    padding: 10px;
    margin: 10px 0 5px;
    border-radius: 10px;
    box-shadow: 5px 1px 12px 4px rgba(0,0,0,0.17);
`

export const Footer = styled.div`
    position: absolute;
    right: 10px;
    bottom: 10px;
    display: flex;
    align-items: center;
    button.close{
        border: 1px solid transparent;
        color: var(--red);
        padding: 10px 15px;
        font-size: 17px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--white);
        font-weight: 600;
        border-radius: 6px;
        margin-right: 10px;
        outline: none;
        cursor: pointer;
        span{
            margin-right: 5px;
        }
        &:hover{
            border: 1px solid var(--red);
            transition: border 0.3s;
        }
    }
    button.save{
        border: 1px solid var(--green);
        color: var(--green);
        padding: 10px 15px;
        font-size: 17px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        font-weight: 600;
        border-radius: 6px;
        margin-right: 5px;
        outline: none;
        cursor: pointer;
        span{
            margin-right: 5px;
        }
        &:hover{
            color: var(--white);
            background-color: var(--green);
            transition: color 0.3s, background-color 0.3s;
        }
    }
`