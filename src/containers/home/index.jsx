import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import MainContent from '../../components/MainContent'
import { Image, FormContainer, InputLabel, Input } from './styles'
import BurgerImage from '../../assets/burger-1.svg'
import Title from '../../components/Title'
import Button from '../../components/Button'

const IndexHome = () => {
  const order = useRef()
  const clientName = useRef()
  const navigate = useNavigate()

  const baseURL = 'http://localhost:3000'

  const handleSubmit = async (e) => {
    e.preventDefault()
    const orderValue = order.current.value
    const clientNameValue = clientName.current.value
    const { data } = await axios.post(`${baseURL}/orders`, {
      order: orderValue,
      clientName: clientNameValue,
    })
    navigate('/projeto-burger/orders')
  }

  return (
    <MainContent>
      <Image src={BurgerImage} alt='Imagem de um hambúrger' />
      <Title>Faça seu Pedido</Title>
      <FormContainer onSubmit={handleSubmit}>
        <InputLabel>
          Pedido
          <Input
            ref={order}
            type='text'
            placeholder='1 Coca-Cola, 1-X Salada'
            required
          />
        </InputLabel>
        <InputLabel>
          Nome do cliente
          <Input
            ref={clientName}
            type='text'
            placeholder='Zé da Manga'
            required
          />
        </InputLabel>
        <Button type='submit'>Novo pedido</Button>
      </FormContainer>
    </MainContent>
  )
}

export default IndexHome
