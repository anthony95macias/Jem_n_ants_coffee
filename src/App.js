import './App.css';
import React, {useState} from 'react';


function App() {
 const [button, setButton] = useState("Coffee");

  return (
    <div>
      <h1>Jem n' Ants Coffee Shop</h1>

        <img src='https://res.cloudinary.com/roastcollective/image/upload/h_1000,w_1000,f_auto,fl_progressive:steep,q_auto:good/v1660260361/solidus/fs1lz3dvktt2zinjgmmu.png' alt="coffee" />
        <p>buy me</p>
      <button onClick={() => setButton(button + 1)}>Buy</button>
        <div>
        <img src='https://res.cloudinary.com/roastcollective/image/upload/w_800,f_jpg,fl_progressive:steep,q_auto:good/v1660249267/solidus/q2uqqtmkvzv9iacmoztl.png' alt="coffee" />
        <p>Buy Me</p>
      <button onClick={() => setButton(button - 1)}>Buy</button>
        </div>
        <img src='https://cdn.shopify.com/s/files/1/0678/8333/products/TACTISQUATCH_1200x1800_b8b32508-3e73-426f-a2b0-13d4b7f7e58f_grande.png?v=1619846157' alt="coffee" />
        <p>Buy Me</p>
      <button onClick={() => setButton(button + 1)}>Buy</button>
        <div>
          <img src='https://cdn.shopify.com/s/files/1/0027/5382/2835/products/EthiopiaOrganicWorkaChelbessa_775x875_dad759b3-ab1b-4411-921d-ff9857303363_550x550.png?v=1670975562' alt="coffee" />
        <p>Buy Me</p>
      <button onClick={() => setButton(button - 1)}>Buy</button>
        </div>
    </div>
  )
}

export default App;

