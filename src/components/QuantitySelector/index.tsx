import { Container } from './styles'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useCartContext } from '../../contexts/CartContext'

export const QuantitySelector = () => {
  const quantity = 10
  const { handleAddProduct } = useCartContext()

  return (
    <Container>
      <button>
        <AiOutlineMinus />
      </button>
      <span className='quantity'>{quantity}</span>
      <button onClick={() => handleAddProduct()}>
        <AiOutlinePlus />
      </button>
    </Container>
  )
}