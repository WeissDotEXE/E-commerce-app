import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import AdminNav from './components/Admin/AdminNav';
import Admin from './components/Admin/Admin';
import AddProduct from './components/Admin/AddProduct';

function App() {
  return (
    <Router>
      <AdminNav />
      <Switch>
        <Route path="/admin" exact component={Admin}/>
        <Route path="/admin/addproduct" exact component={AddProduct} />
      </Switch>
    </Router>
  );
}

export default App;
