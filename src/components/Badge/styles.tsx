import styled from 'styled-components'

interface ContainerProps {
    completed?: boolean
}

export const Container = styled.div<ContainerProps>`
    border-radius: 6px;
    background-color: ${props => props.completed ? 'var(--green)' : 'var(--red)'};
    color: var(--white);
    padding: 5px;
`