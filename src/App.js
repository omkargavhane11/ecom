import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <PhoneList />
    </div>
  );
}
export default App;


function PhoneList() {
  const products = [
    {
      "_id": "627bab30483f274feea6726f",
      "model": "OnePlus 9 5G",
      "img": "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
      "company": "Oneplus",
      disable_state: false
    },
    {
      "_id": "627bab30483f274feea67270",
      "model": "Iphone 13 mini",
      "img": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315986",
      "company": "Apple",
      disable_state: false
    },
    {
      "_id": "627bab30483f274feea67271",
      "model": "Samsung s21 ultra",
      "img": "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
      "company": "Samsung",
      disable_state: false
    },
    {
      "_id": "627bab30483f274feea67272",
      "model": "Xiomi mi 11",
      "img": "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",
      "company": "Xiomi",
      disable_state: false
    },

  ]
  const [mobiles, setMobiles] = useState(products);
  const [cart, setCart] = useState([]);

  return (
    <div>
      <div className="navbar">
        <button className="navbar_button">mystore.com</button>
      </div>
      <div className="phonelist_container">
        {mobiles.map(mobile => <Phone
          key={mobile._id}
          mobile={mobile}
          cart={cart}
          setCart={setCart}
        />)}
      </div>

      <div className="cartlist_container_div">
        <h2>CART</h2>
        <div className="cartlist_container">
          {cart.map(mobile => <Cart
            key={mobile._id}
            mobile={mobile}
            cart={cart}
            setCart={setCart}
          />)}
        </div>

      </div>
    </div>
  )
}


function Phone({ mobile, cart, setCart }) {

  return (
    <div className="phone_container">
      <img src={mobile.img} alt="" className="phone_img" />
      <h2 className="phone_name">{mobile.model}</h2>
      <p className="phone_model">{mobile.company}</p>
      <Addbutton keys={mobile._id} cart={cart} setCart={setCart} mobile={mobile} />
    </div>
  )
}

function Cart({ mobile, cart, setCart }) {

  return (
    <div className="phone_container">
      <img src={mobile.img} alt="" className="phone_img" />
      <h2 className="phone_name">{mobile.model}</h2>
      <p className="phone_model">{mobile.company}</p>
      <Deletebutton keys={mobile._id} cart={cart} setCart={setCart} mobile={mobile} />
    </div>
  )
}

function Addbutton({ cart, setCart, mobile, mobiles, keys }) {
  return (
    <div>
      <button className='add_to_cart'
        onClick={() => {
          let temp_mobile = mobile;
          temp_mobile.disable_state = true;
          setCart([...cart, mobile])
        }}
        disabled={mobile.disable_state} >Add to cart</button>
    </div>
  )
}

function Deletebutton({ cart, setCart, mobile, keys }) {
  function deleteProduct(arr, num) {
    let temp = arr;
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === temp[i]) {
        newarr.push(arr[i]);
      }
    }
    return newarr;
  }
  return (
    <div>
      <button className='remove_btn'
        onClick={() => {
          let temp_cart = cart;
          let result = temp_cart.filter((e) => e.company !== mobile.company)
          setCart(result)
          let temp_mobile = mobile;
          mobile.disable_state = false;


        }}
      >Remove</button>
      <button className="buy_btn">BUY NOW</button>
    </div>
  )
}



























