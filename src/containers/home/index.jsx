import MainContent from '../../components/MainContent'
import { Image, FormContainer, InputLabel, Input } from './styles'
import BurgerImage from '../../assets/burger-1.svg'
import Title from '../../components/Title'
import Button from '../../components/Button'

const IndexHome = () => {
  return (
    <MainContent>
      <Image src={BurgerImage} alt='Imagem de um hambúrger' />
      <Title>Faça seu Pedido</Title>
      <FormContainer>
        <InputLabel>
          Pedido
          <Input type='text' placeholder='1 Coca-Cola, 1-X Salada' required />
        </InputLabel>
        <InputLabel>
          Nome do cliente
          <Input type='text' placeholder='Zé da Manga' required />
        </InputLabel>
        <Button>Novo pedido</Button>
      </FormContainer>
    </MainContent>
  )
}

export default IndexHome
