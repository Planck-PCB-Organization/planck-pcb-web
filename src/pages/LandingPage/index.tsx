import About from "../Sections/About/About";
import Order from "../Sections/Order/Order";
import Products from "../Sections/Products/Products";
import QuetoForm from "../Sections/Queto/QuetoForm";

const LandingPage = () => {
  return (
    <>
      <QuetoForm />
      <About />
      <Products />
      <Order />
    </>
  );
};

export default LandingPage;
