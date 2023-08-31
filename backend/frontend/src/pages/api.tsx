import axios from 'axios';

const BOOK_API_REST_URL = "http://localhost:8081/books";

class APIService {

    getBooks(){
        return axios.get(BOOK_API_REST_URL);
    }

}

export default new APIService();