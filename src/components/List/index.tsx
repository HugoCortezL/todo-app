import {Container, InputContainer} from './styles'

import {AiOutlinePlus} from 'react-icons/ai'

import Item from '../Item'

export default function List() {
  return (
    <Container>
      <InputContainer>
        <form action="">
          <input type="text" />
          <button>
            <AiOutlinePlus size={25}/>
          </button>
        </form>
      </InputContainer>
      <Item id={1} complete={true} title={"Testando o title"} description={'Testando a descrição de um item true'}/>
      <Item id={2} complete={false} title={"Testando o title do false"}/>
      <Item id={3} complete={false} title={"Testando o title do false2"}/>
      <Item id={4} complete={false} title={"Testando o title do false3"}/>
      <Item id={5} complete={false} title={"Testando o title do false4"}/>
      <Item id={6} complete={false} title={"Testando o title do false5"}/>
      <Item id={7} complete={false} title={"Testando o title do false6"}/>
      <Item id={8} complete={false} title={"Testando o title do false7"}/>
      <Item id={9} complete={false} title={"Testando o title do false8"}/>
      <Item id={10} complete={false} title={"Testando o title do false9"}/>
    </Container>
  )
}
