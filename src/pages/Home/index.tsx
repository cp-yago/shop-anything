import { Navbar } from '../../components';
import { ProductList } from './ProductList';
import { Intro } from './Intro';

export function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <ProductList />
    </>
  );
}
