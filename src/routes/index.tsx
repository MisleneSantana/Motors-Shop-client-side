import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { SellerDashboard } from '../pages/SellerDashboard';
import { BuyerDashboard } from '../pages/BuyerDashboard';
import { ResetPassword } from '../pages/ResetPassword';
import { Ad } from '../pages/Ad';

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/resetPassword' element={<ResetPassword />}></Route>

      {/* <Route element={<RoutesProtected />}> */}
      <Route path='/buyerHome' element={<BuyerDashboard />} />
      <Route path='/sellerHome' element={<SellerDashboard />} />
      <Route path='/product' element={<Ad />} />
      {/* </Route> */}

      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  );
};
