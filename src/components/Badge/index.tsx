import {Container} from './styles'

type BadgeProps = {
    completed: boolean
}

export default function Badge(props: BadgeProps) {
    if(props.completed){
        return (
            <Container completed={props.completed}>
                Completed
            </Container>
        )
    }else{
        return (
            <Container>
                Not completed
            </Container>
        )

    }
}
