import {BrowserRouter} from 'react-router-dom';
import RoutesApp from './routes';

import AuthProvider from './contexts/Auth';

import{ ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App(){  
  return(
    <div>
      <BrowserRouter>
      <AuthProvider>
        <ToastContainer autoClose = {3000} />
      <RoutesApp/>
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
