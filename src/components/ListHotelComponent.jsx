import React, { Component } from 'react';
import HotelService from '../services/HotelService';

class ListHotelComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hotels: []
        }
    }
    componentDidMount(){
        HotelService.getHotels().then((res) => {
            this.setState({hotels: res.data});
        });
    }

    
    render() {
        return (
            <div>
                <h2 className="text-center">Hotels List</h2> 
                <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th> Hotel Id</th>
                                <th> Room Category Id </th>
                                <th> Occupancy</th>
                                <th> Date</th>
                                <th> Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    
                                    this.state.hotels.map(
                                        hotel =>
                                        <tr key = {hotel.hotelId}>
                                            <td> { hotel.hotelId} </td>
                                            <td> { hotel.roomCategoryId} </td>
                                            <td> { hotel.occupancy} </td>
                                            <td> { hotel.date} </td>
                                            <td> { hotel.price} </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                </div>

            </div>
        );
    }
}

export default ListHotelComponent;