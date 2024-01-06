import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaRegTrashCan } from 'react-icons/fa6'
import MainContent from '../../components/MainContent'
import { Image, ContainerOrders, Order, Text } from './styles'
import BurgerBagImage from '../../assets/burger-2.svg'
import Title from '../../components/Title'
import Button from '../../components/Button'

const IndexOrder = () => {
  const [orders, setOrders] = useState([])

  const baseURL = 'http://localhost:3000'

  useEffect(() => {
    const handleGetOrder = async () => {
      const { data } = await axios.get(`${baseURL}/orders`)
      setOrders(data)
    }
    handleGetOrder()
  }, [])

  return (
    <MainContent>
      <Image src={BurgerBagImage} alt='imagem de saco de hambúrguer' />
      <Title>Pedidos</Title>
      <ContainerOrders>
        {orders.map((order) => (
          <Order key={order.id}>
            <div>
              <Text>{order.order}</Text>
              <Text className='clientName'>{order.clientName}</Text>
            </div>
            <FaRegTrashCan />
          </Order>
        ))}
      </ContainerOrders>
      <Button $isBack={true}>Voltar</Button>
    </MainContent>
  )
}

export default IndexOrder
