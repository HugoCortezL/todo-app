import {Container,ItemContainer, LeftContainer, RightContainer, DescriptionContainer} from './styles'

import ItemModal from '../ItemModal'

import {BsPencil, BsTrash} from 'react-icons/bs'
import {MdOutlineDescription} from 'react-icons/md'

import {useState} from 'react'

type ItemProps = {
    id: number,
    title: string,
    description?: string,
    complete: boolean
}

export default function Item(props: ItemProps){
    const [status, setStatus] = useState(props.complete);
    const [showDescription, setShowDescription] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    
    const openItemModal = () => {
        setShowEdit(prev => !prev)
    }


    return (
        <Container className={status ? 'complete' : ''}>
            <ItemContainer>
                <LeftContainer>
                    <form action="">
                        <label className="container" htmlFor={props.title}>{props.title}
                            <input type="checkbox" id={props.title} checked={status ? true : false} onClick={() => setStatus(prev => !prev)}/>
                            <span className="checkmark"  ></span>
                        </label>
                    </form>
                </LeftContainer>
                <RightContainer>
                    <span onClick={() => setShowDescription(prev => !prev)}>
                        <MdOutlineDescription color={'var(--dark-blue)'}/>
                    </span>
                    <span>
                        <BsPencil onClick={openItemModal}color={'var(--dark-blue)'}/>
                    </span>
                    <span>
                        <BsTrash color={'var(--dark-blue)'}/>
                    </span>
                </RightContainer>
            </ItemContainer>
            <DescriptionContainer show={showDescription}>
                <p>
                    {props.description != null ? props.description : 'No description available'}
                </p> 
            </DescriptionContainer>
            <ItemModal show={showEdit} setShowEdit={openItemModal} item={props} todo={'edit'}/>
        </Container>
    )
}
