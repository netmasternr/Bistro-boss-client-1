import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Pages/Shared/Nav/Nav";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')

    return (
        <div>
            {noHeaderFooter || <Nav />}
            <Outlet />
            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default Main;