import { Container } from './styles'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useCartContext } from '../../contexts/CartContext'
import { useMemo } from 'react'

interface QuantitySelectorProps {
  productId: number
}

export const QuantitySelector = ({ productId }: QuantitySelectorProps) => {

  const { handleAddProduct, handleRemoveProduct, cart } = useCartContext()

  const quantity = useMemo(() => {
    return cart.products.find((product) => product.product.id === productId)?.quantity || 0
  }, [cart])

  return (
    <Container>
      <button onClick={() => handleRemoveProduct(productId)}>
        <AiOutlineMinus />
      </button>
      <span className='quantity'>{quantity}</span>
      <button onClick={() => handleAddProduct(productId)}>
        <AiOutlinePlus />
      </button>
    </Container>
  )
}