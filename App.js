import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import CustomerRouters from './Routers/CustomerRouters';

function App() {
  return (
    <Router>
    <div className="">
    <div>
    
    </div>

      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>
    
    <div>
     
    </div>
    
    </div>
    </Router>
  );
}

export default App;