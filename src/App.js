import "./App.css";
import { useEffect, useState } from "react";
import productsData from "./products.json";

function App() {
  const [textinput, settextinput] = useState("");
  const [products, setproducts] = useState(productsData);

  useEffect(() => {
    let filteredData = productsData.filter((product) =>
      product.name.toLowerCase().includes(textinput.toLowerCase())
    );
    setproducts(filteredData);
  }, [textinput]);

  return (
    <div className="App">
      <div className="header">
        <h1>Mani's Music Store</h1>
        <input
          type="text"
          name="name"
          onChange={(e) => settextinput(e.target.value)}
        />
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.img} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <button
              onClick={() =>
                window.open(
                  `https://web.whatsapp.com/send?phone=919150813919&text=please send ${product.name}`
                )
              }
            >
              Buy on whatsapp
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
