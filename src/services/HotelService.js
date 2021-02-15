import axios from 'axios';
const url = "http://localhost:8080/hotels";
const url1 = "http://localhost:8080/hotelsDisplay";
class HotelService{
    getHotels(){
        return axios.get(url);
    }
    getPrice(hotel){
        // return axios.post()
        return axios.post(url1,hotel);
        
    }
}

export default new HotelService();