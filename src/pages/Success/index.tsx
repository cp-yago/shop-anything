import { BiMap } from 'react-icons/bi';
import { FiClock } from 'react-icons/fi';
import { TfiMoney } from 'react-icons/tfi';
import { IconWithBackground, Header } from '../../components';
import { Container, Content, PurchaseDataContainer } from './styles';

import successImage from '../../assets/illustration.svg';
import { defaultTheme } from '../../styles/themes/default';
import { useShoppingContext } from '../../contexts/ShoppingContext';

export function Success() {
  const { cart: { checkoutFormData } } = useShoppingContext();

  const getCurrentDate = () => {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDay();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <Container>
      <Header />
      <Content>
        <PurchaseDataContainer>
          <h1>Thank you!</h1>
          <p>Now just wait for your product to reach you soon.</p>

          <div className="purchase-data-container">
            <div className="info-container">
              <IconWithBackground
                icon={<BiMap />}
                iconBackgroundColor={defaultTheme['purple-light']}
              />
              <p>
                {`Entrega em: ${checkoutFormData?.street}`}
              </p>
            </div>

            <div className="info-container">
              <IconWithBackground
                icon={<FiClock />}
                iconBackgroundColor={defaultTheme['yellow-brand']}
              />
              <p>
                {`Delivery date: ${getCurrentDate()}`}
              </p>
            </div>

            <div className="info-container">
              <IconWithBackground
                icon={<TfiMoney />}
                iconBackgroundColor={defaultTheme['yellow-dark']}
              />
              <p>
                Payment on delivery
              </p>
            </div>

          </div>

        </PurchaseDataContainer>
        <img src={successImage} alt="success" />
      </Content>
    </Container>
  );
}
