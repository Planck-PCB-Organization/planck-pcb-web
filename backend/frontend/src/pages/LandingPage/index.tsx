import About from "../Sections/About/About";
import Order from "../Sections/Order/Order";
import Products from "../Sections/Products/Products";
import QuetoForm from "../Sections/Queto/QuetoForm";
import First from "../Sections/First/First";
import Footer from "../../components/Footer";

const LandingPage = () => {
    return (
        <>
            {/*<First/>*/}
            <QuetoForm/>
            <About/>
            <Products/>
            <Order/>
            <Footer/>
        </>
    );
};

export default LandingPage;
