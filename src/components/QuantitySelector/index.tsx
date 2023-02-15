import { Container } from './styles'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

export const QuantitySelector = () => {
  const quantity = 10

  return (
    <Container>
      <button>
        <AiOutlineMinus />
      </button>
      <span className='quantity'>{quantity}</span>
      <button>
        <AiOutlinePlus />
      </button>
    </Container>
  )
}