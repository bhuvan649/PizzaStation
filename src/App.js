import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import Products from './pages/Products';
import Order from './pages/Order';
import Cart from './pages/Cart';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/products" element={<Products />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
