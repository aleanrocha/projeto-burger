import { FaRegTrashCan } from 'react-icons/fa6'
import MainContent from '../../components/MainContent'
import { Image, ContainerOrders, Order, Text } from './styles'
import BurgerBagImage from '../../assets/burger-2.svg'
import Title from '../../components/Title'
import Button from '../../components/Button'

const IndexHome = () => {
  return (
    <MainContent>
      <Image src={BurgerBagImage} alt='imagem de saco de hambúrguer' />
      <Title>Pedidos</Title>
      <ContainerOrders>
        <Order>
          <div>
            <Text>1 Coca-Cola, 1 X-Salada</Text>
            <Text className='clientName'>Steve Jobs</Text>
          </div>
          <FaRegTrashCan />
        </Order>
        <Order>
          <div>
            <Text>1 Batata Grande, 1 X-Bacon, 2 Coca-Colas Light</Text>
            <Text className='clientName'>Zé da Manga</Text>
          </div>
          <FaRegTrashCan />
        </Order>
      </ContainerOrders>
      <Button $isBack={true}>Voltar</Button>
    </MainContent>
  )
}

export default IndexHome
