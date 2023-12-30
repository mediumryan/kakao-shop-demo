import './css/index.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
// import components
import MainNav from './components/Navbar/MainNav';
import Footer from './components/Footer';
// import pages
import Home from './pages/Home';
import Charm from './pages/Charm';
import Umbrella from './pages/Umbrella';
import Stationery from './pages/Stationery';
import Bedding from './pages/Bedding';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';
import Detail from './pages/Detail';
// import icons
import { FaBackward } from 'react-icons/fa';
// import state data
import { navMenuState } from './atom';

const MainWrapper = styled.main`
    position: relative;
`;

const GoBack = styled(FaBackward)`
    position: fixed;
    top: 15%;
    left: 5%;
    font-size: 1.25rem;
    color: var(--accent-300);
    transition: 300ms all;
    cursor: pointer;
    z-index: 3;
    &:hover {
        color: var(--accent-100);
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        top: 5%;
    }
`;

export default function App() {
    const navigate = useNavigate();

    const [navMenu, setNavMenu] = useRecoilState(navMenuState);
    const closeNavMenu = () => {
        if (navMenu === true) {
            setNavMenu(false);
        }
        return;
    };

    return (
        <MainWrapper onClick={closeNavMenu}>
            <MainNav />
            <GoBack
                onClick={() => {
                    navigate(-1);
                }}
            />
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
        </MainWrapper>
    );
}
