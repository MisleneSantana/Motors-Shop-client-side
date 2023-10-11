import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signin' element={<Login />}></Route>
      <Route path='/signup' element={<Register />}></Route>
      <Route path='/register' element={<Register />}></Route>

      {/* <Route element={<RoutesProtected />}>
          <Route
            path="/companyHome"
            element={
              <CommerceProvider>
                <CommerceDashboard />
              </CommerceProvider>
            }
          />
          <Route path="/userHome" element={<UserDashboard />} />
        </Route> */}

      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  );
};
