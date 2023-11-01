import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import SearchBox from './components/SearchBox';


const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <main className=' body-home'>
                <Container >
                    <Routes>
                        <Route path='/' element={<HomeScreen />} />
                        <Route path='/product/:id'  element={<ProductScreen />} />
                        <Route path='/cart/:id'  element={<CartScreen />} />
                        <Route path='/cart'  element={<CartScreen />} />
                        <Route  path='/login'  element={<LoginScreen /> } />
                        <Route path='/register'  element={<RegisterScreen /> } />
                        <Route path='/profile'  element={<ProfileScreen /> } />
                        <Route path='/login/shipping'  element={<ShippingScreen /> } />
                        <Route path='/register/shipping'  element={<ShippingScreen /> } />
                        <Route path='/payment'  element={<PaymentScreen /> } />
                        <Route path='/placeorder'  element={ <PlaceOrderScreen /> } />
                        <Route path='/order/:id'  element={ <OrderScreen /> } />
                        <Route path='/admin/userlist'  element={ <UserListScreen /> } />
                        <Route path='/admin/user/:id/edit'  element={ <UserEditScreen /> } />
                        <Route path='/admin/productlist'  element={ <ProductListScreen /> } />
                        <Route path='/admin/product/:id/edit'  element={ <ProductEditScreen /> } />
                        <Route path='/admin/orderlist'  element={ <OrderListScreen /> } />
                        <Route path='/search/:keyword'  element={ <SearchBox /> } />
                    </Routes>
                </Container> 
            </main>
            <Footer />       
        </BrowserRouter>
    )
}

export default App;