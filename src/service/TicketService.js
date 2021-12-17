import axios from "axios";

class ProductService {

    async postTicket(ticketObject) {
        // Make a post request with Axios to the server https://soporte-fiuba.herokuapp.com/tickets 
        // with the ticketObject as the body
        const response = await axios.post("https://soporte-fiuba.herokuapp.com/tickets", ticketObject);
        return response;  
    }
};

export default ProductService;