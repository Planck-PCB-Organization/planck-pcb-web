import About from "../Sections/About/About";
import Order from "../Sections/Order/Order";
import Products from "../Sections/Products/Products";
import QuetoForm from "../Sections/Queto/QuetoForm";
import Footer from "../../components/Footer";

const LandingPage = () => {
  return (
    <>
      <QuetoForm />
      <About />
      <Products />
      <Order />
      <Footer />
    </>
  );
};

export default LandingPage;
