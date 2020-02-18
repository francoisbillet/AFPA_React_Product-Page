import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductPage from "./ProductPage";
import Header from "./Header.js";
import InputText from "./InputText";

const useProducts = () => {
  const [products, setProducts] = React.useState([]);
  const [inputProduct, setInputProduct] = React.useState(0);
  useEffect(() => {
    fetch("https://server-ten.now.sh")
      .then(body => body.json())
      .then(response => {
        setProducts(response);
        response.forEach(product => console.log(product.id));
        // console.log(response);
      });
  }, [inputProduct]);

  const product = products.find(product => {
    return product.id === inputProduct;
  });

  return [setInputProduct, product];
};

function App() {
  const [setInputProduct, product] = useProducts();
  return (
    <React.Fragment>
      <Header />
      <InputText setInputProduct={setInputProduct} />
      <ProductPage product={product} />
    </React.Fragment>
  );
}

export default App;
