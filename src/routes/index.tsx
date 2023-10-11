import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { SellerDashboard } from '../pages/SellerDashboard';
import { BuyerDashboard } from '../pages/BuyerDashboard';

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>

      {/* <Route element={<RoutesProtected />}> */}
      <Route
        path='/buyerHome'
        element={
          // <CommerceProvider>
          <BuyerDashboard />
          // </CommerceProvider>
        }
      />
      <Route path='/sellerHome' element={<SellerDashboard />} />
      {/* </Route> */}

      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  );
};
