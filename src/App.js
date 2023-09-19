import './css/index.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
// components
import MainNav from './components/Navbar/MainNav';
import Footer from './components/Footer';
// pages
import Home from './pages/Home';
import Charm from './pages/Charm';
import Umbrella from './pages/Umbrella';
import Stationery from './pages/Stationery';
import Bedding from './pages/Bedding';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';
import Detail from './pages/Detail';
import { styled } from 'styled-components';
import { FaBackward } from 'react-icons/fa';

const GoBack = styled(FaBackward)`
    position: fixed;
    top: 22%;
    left: 5%;
    font-size: var(--font-size-small);
    color: var(--primary-100);
    transition: 300ms all;
    cursor: pointer;
    &:hover {
        transform: scale(1.05);
        opacity: 0.77;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        top: 13.5%;
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        top: 3.5%;
        z-index: 10;
    }
`;

export default function App() {
    const navigate = useNavigate();

    return (
        <div>
            <MainNav />
            <Routes>
                <Route path="/" element={<Home pageTitle={'Home'} />} />
                <Route path="/charm" element={<Charm pageTitle={'Charm'} />} />
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
                <Route path="detail/:id" element={<Detail />} />
                <Route path="/cart" element={<Cart pageTitle={'Cart'} />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <GoBack
                onClick={() => {
                    navigate(-1);
                }}
            />
            <Footer />
        </div>
    );
}
