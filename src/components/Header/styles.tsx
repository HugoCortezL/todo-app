import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    header{
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        padding: 10px 0;
        background-color: var(--white);
        box-shadow: 0 3px 10px 0 rgb(115 143 147 / 30%);
        position: fixed;
        top: 0px;
        width: 100%;
    }
    h1{
        font-weight: 400;
        font-size: 35px;
    }
`
