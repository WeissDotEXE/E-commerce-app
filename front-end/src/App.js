import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Admin from "./components/Admin/Admin";
import AddProduct from "./components/Admin/AddProduct";
import Home from "./components/Home/Home";
import WrongLink from "./components/Error/WrongLink";
import background from "./components/Media/background.jpg";
import LaptopPage from "./components/ProductPages/LaptopPage";
import SmartphonesPage from "./components/ProductPages/SmartphonesPage";
import AccesoriesPage from "./components/ProductPages/AccesoriesPage";
import UpdateProduct from "./components/Admin/UpdateProduct";
import Cart from "./components/Cart/Cart";
import SendOrder from "./components/Cart/SendOrder";
import Orders from "./components/Admin/Orders";
import ProductDetail from "./components/ProductPages/ProductDetail";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

function App() {
  const [isCartEmpty, setIsCartEmpty] = useState(
    (prevCart)=>{
      return 
    }
  );

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/admin" exact>
          <Admin />
        </Route>
        <Route path="/admin/add-product" exact>
          <AddProduct />
        </Route>
        <Route path="/admin/update-product" exact>
          <UpdateProduct />
        </Route>
        <Route path="/products/laptops" exact>
          <LaptopPage />
        </Route>
        <Route path="/products/smartphones" exact>
          <SmartphonesPage />
        </Route>
        <Route path="/products/accesories" exact>
          <AccesoriesPage />
        </Route>
        <Route path="/products/:productId" exact>
          <ProductDetail />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/sendorder" exact>
          <SendOrder />
        </Route>
        <Route path="/admin/orders" exact>
          <Orders />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route component={WrongLink} />
      </Switch>
    </Router>
  );
}

export default App;
