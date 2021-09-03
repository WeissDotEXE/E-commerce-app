import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Admin from './components/Admin/Admin';
import AddProduct from './components/Admin/AddProduct';
import Home from './components/Home/Home';
import Error from './components/Error/ErrorPage';
import background from './components/Media/background.jpg';
import LaptopPage from './components/Laptops/LaptopPage';
function App() {
  return (
    <Router>
      <img id="background" src={background}/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/admin" exact component={Admin}/>
        <Route path="/admin/addproduct" exact component={AddProduct} />
        <Route path="/products/laptops" exact component={LaptopPage} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
