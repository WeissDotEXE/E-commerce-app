import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Admin from './components/Admin/Admin';
import AddProduct from './components/Admin/AddProduct';
import Home from './components/Home/Home';
import Error from './components/Error/ErrorPage';
import background from './components/Media/background.jpg';
import LaptopPage from './components/ProductPages/LaptopPage';
import SmartphonesPage from './components/ProductPages/SmartphonesPage';
import AccesoriesPage from './components/ProductPages/AccesoriesPage';
import UpdateProduct from './components/Admin/UpdateProduct';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/admin" exact component={Admin}/>
        <Route path="/admin/add-product" exact component={AddProduct} />
        <Route path="/admin/update-product" exact component={UpdateProduct} />
        <Route path="/products/laptops" exact component={LaptopPage} />
        <Route path="/products/smartphones" exact component={SmartphonesPage}/>
        <Route path="/products/accesories" exact component={AccesoriesPage} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
