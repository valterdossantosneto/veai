import {Routes, Route} from 'react-router-dom';

import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';
import Home from '../pages/Home';
import SingnUpProdcts from '../pages/SingnUpProdcts';
import Private from './Private';
import Profile from '../pages/Profile';

function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/singin' element={<SingIn/>} />
            <Route path='/singup' element={<SingUp/>} />
            <Route path='/singnupprodcts' element={<Private><SingnUpProdcts/></Private>} />
            <Route path='/profile' element={<Private><Profile/></Private>} />
        </Routes>
    )
}
export default RoutesApp;