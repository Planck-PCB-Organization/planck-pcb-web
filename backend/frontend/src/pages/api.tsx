import axios from 'axios';

const API_REST_BASE_URL= "http://localhost:3001/";

class APIService {

    getBooks() {
        return axios.get(API_REST_BASE_URL + "sendMail")
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    addBook(bookData:number|string) {
        // return axios.post(API_REST_BASE_URL + "calculatePrice", bookData);
        return axios.post(API_REST_BASE_URL + "calculatePrice",bookData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

export default new APIService();