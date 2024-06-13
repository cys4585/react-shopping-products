import ErrorToast from "../components/ErrorToast/ErrorToast";
import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";
import { ErrorProvider } from "../context/ErrorContext";

import * as PLP from "./ProductListPage.style";

const ProductListPage = () => {
  return (
    <ErrorProvider>
      <PLP.Top>
        <Header />
        <ErrorToast />
      </PLP.Top>

      <PLP.Body>
        <ProductList />
      </PLP.Body>
    </ErrorProvider>
  );
};

export default ProductListPage;
