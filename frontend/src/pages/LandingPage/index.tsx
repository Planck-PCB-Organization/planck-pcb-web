import About from "../Sections/About/About";
import Order from "../Sections/Order/Order";
import Products from "../Sections/Products/Products";
import QuetoForm from "../Sections/Queto/QuetoForm";
import Button from "../../components/Button";
import APIService from "../api";
import  {useState} from "react";

const LandingPage = () => {
    const [buttonText, setButtonText] = useState('Click');
    function createPost() {
        console.log("fwkdfldş")
        APIService.getBooks().then((data) => {
            console.log(data.data[0].bookName)
            setButtonText(data.data[0].bookName);
        })
            .catch(function (ex) {
                console.log('Response parsing failed. Error: ', ex);
            });
        ;

    }

    return (
        <>
            <Button onClick={createPost}>{buttonText}</Button>
            <QuetoForm/>
            <About/>
            <Products/>
            <Order/>
            {/*<Footer />*/}
        </>
    );
};

export default LandingPage;
