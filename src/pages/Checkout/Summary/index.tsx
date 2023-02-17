import { Card, QuantitySelector } from "../../../components"
import { Container, SummaryItemContainer } from "./styles"
import { BiTrash } from 'react-icons/bi'

import { useCartContext } from "../../../contexts/CartContext"
import { ProductInCart } from "../../../reducers/shopping/reducer"

interface SummaryItemProps {
  product: ProductInCart
}

const SummaryItem = ({ product }: SummaryItemProps) => {
  const total = product.product.price * product.quantity
  return (
    <SummaryItemContainer>
      <div className="image-container">
        <img src={product.product.img} alt="Creamy espresso" />
      </div>
      <div className="info-container">
        <h1>Expresso cremoso</h1>
        <div className="quantity-container">
          <QuantitySelector productId={product.product.id} />
          <button>
            <BiTrash />
            Remover
          </button>
        </div>
      </div>
      <div>
        <span>{`R$ ${total}`}</span>
      </div>
    </SummaryItemContainer>
  )
}

export const Summary = () => {
  const { cart } = useCartContext()

  return (
    <Container>
      <h1>Cafés selecionados</h1>
      <Card>
        {cart.products.map((product) => (
          <SummaryItem product={product} />
        ))}

        <div className="total-container">
          <div className="total-item">
            <span>Total de itens</span>
            <span>R$ 40,89</span>
          </div>
          <div className="total-item">
            <span>Entrega</span>
            <span>R$ 7,98</span>
          </div>
          <div className="total-item">
            <span>
              <strong>Total</strong>
            </span>
            <span>
              <strong>R$ 7,98</strong>
            </span>
          </div>
          <button>Confirmar pedido</button>
        </div>
      </Card>
    </Container>
  )
}