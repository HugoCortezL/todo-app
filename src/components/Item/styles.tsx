import styled from 'styled-components'

interface DescriptionContainerProps {
    show: boolean
}

export const Container = styled.div`
    width: 100%;
    background-color: #F5F5F5;
    color: var(--dark-blue);
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 20px;
    overflow: hidden;
    & + div{
        margin-top: 10px;
    }
    &.complete{
        background-color: #ECFFE5;
        overflow: hidden;
        & label{
            text-decoration: line-through;
            color: #8A8A8A;
        }
    }
`

export const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const DescriptionContainer = styled.div<DescriptionContainerProps>`
    background-color: #FFFFFF;
    padding: 10px;
    margin: 10px 0 5px;
    border-radius: 10px;
    box-shadow: 5px 1px 12px 4px rgba(0,0,0,0.17);
    display: ${props => props.show ? 'block' : 'none'};
`

export const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;

    .container {
    display: block;
    position: relative;
    padding-left: 27px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    }

    .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    }

    .checkmark {
    position: absolute;
    top: 3px;
    left: 0px;
    height: 20px;
    width: 20px;
    background-color: #E7EEEF;
    box-shadow: inset 0 1px 4px rgb(0 0 0 / 10%), 0 0 0 transparent;
    border-radius: 10px;
    }

    .container:hover input ~ .checkmark {
    background-color: #E7EEEF;
    }

    .container input:checked ~ .checkmark {
    background-color: #068932;
    }

    .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    }

    .container input:checked ~ .checkmark:after {
    display: block;
    }

    .container .checkmark:after {
    left: 7.5px;
    top: 3.5px;
    width: 3px;
    height: 8px;
    border: solid white;
    border-width: 0 3px 3px 0;
    border-radius: 3px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    }
`

export const RightContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    span{
        cursor: pointer;
    }
    span + span{
        margin-left: 15px;
    }

`