import { Header } from '../../components';
import { ProductList } from './ProductList';
import { Intro } from './Intro';

export function Home() {
  return (
    <>
      <Header />
      <Intro />
      <ProductList />
    </>
  );
}
