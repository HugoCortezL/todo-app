import {Container, Top, DescriptionContainer, Footer, ModalWrapper} from './styles'

import Badge from '../Badge'
import {AiOutlineClose, AiOutlineCheck} from 'react-icons/ai'

type ItemProps = {
  id: number,
  title: string,
  description?: string,
  complete: boolean
}

type ItemDescriptionProps = {
  show: boolean,
  item: ItemProps,
  setShowEdit: any,
  todo: string
}


export default function ItemDescription(props: ItemDescriptionProps) {
  if(props.show){
    return (
      <Container>
        <ModalWrapper>
          <Top>
            <h1>{props.item.title}</h1>
            <Badge completed={props.item.complete}/>
          </Top>
          <DescriptionContainer>
            {props.item.description != null ? props.item.description : 'No description available'}
          </DescriptionContainer>
          <Footer>
            <button className="close" onClick={props.setShowEdit}>
              <span>
                Close
              </span>
              <AiOutlineClose size={17}/>
            </button>
            <button className="save">
              <span>
                Save
              </span>
              <AiOutlineCheck size={17}/>
            </button>
          </Footer>
        </ModalWrapper>
      </Container>
    )
  }else{
    return (null)
  }
}
