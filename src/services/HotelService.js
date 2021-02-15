import axios from 'axios';
const url = "http://localhost:8080/hotels";
const url1 = "http://localhost:8080/hotelsDisplay";
const url2 = "http://localhost:8080/pushCsv";
const url3 = "http://localhost:8080/csvStatus";
class HotelService{
    getHotels(){
        return axios.get(url);
    }
    getPrice(hotel){
        return axios.post(url1,hotel);
    }
    sendCsv(fileName){
        return axios.post(url2,fileName);
    }
    getStatus(){
        return axios.get(url3);
    }
}

export default new HotelService();