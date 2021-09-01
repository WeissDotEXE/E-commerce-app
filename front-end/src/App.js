import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import AdminNav from './components/Admin/AdminNav';
import Admin from './components/Admin/Admin';
import AddProduct from './components/Admin/AddProduct';
import Home from './components/Home/Home';
import Error from './components/Error/ErrorPage';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/admin" exact component={Admin}/>
        <Route path="/admin/addproduct" exact component={AddProduct} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
