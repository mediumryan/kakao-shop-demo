import './css/index.css';
import { Routes, Route } from 'react-router-dom';
// components
import MainNav from './components/Navbar/MainNav';
import Footer from './components/Footer';
// pages
import Home from './pages/Home';
import Doll from './pages/Doll';
import Umbrella from './pages/Umbrella';
import Stationery from './pages/Stationery';
import Bedding from './pages/Bedding';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';

export default function App() {
    return (
        <div>
            <MainNav />
            <Routes>
                <Route path="/" element={<Home pageTitle={'Home'} />} />
                <Route path="/doll" element={<Doll pageTitle={'Doll'} />} />
                <Route
                    path="/umbrella"
                    element={<Umbrella pageTitle={'Umbrella'} />}
                />
                <Route
                    path="/stationery"
                    element={<Stationery pageTitle={'Stationery'} />}
                />
                <Route
                    path="/bedding"
                    element={<Bedding pageTitle={'Bedding'} />}
                />
                <Route path="/cart" element={<Cart pageTitle={'Cart'} />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}
