import React from "react";
import HotelService from '../services/HotelService';
class PriceComponent extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            success: false,
            date:'',
            roomCategoryId:'',
            hotelId: '',
            hotels: []
        }

        this.submitEntries=this.submitEntries.bind(this);
        this.changeHotelIdHandler=this.changeHotelIdHandler.bind(this);
        this.changeRoomIdHandler=this.changeRoomIdHandler.bind(this);
        this.changeDateHandler=this.changeDateHandler.bind(this);

    }
    
    // async componentDidMount(){
    //     const url="http://localhost:8080/hotels";
    //     const response=await fetch(url);
    //     const body = await response.json();
    //     this.setState({hotels : body , loading: false});
    // }

    submitEntries=(e) =>{
        e.preventDefault();
        let obj = {hotelId: this.state.hotelId, roomCategoryId: this.state.roomCategoryId, date: this.state.date};
        console.log(obj);
        HotelService.getPrice(obj).then(res =>{
            this.setState({hotels: res.data});
            this.setState({ success: true });
            console.log(res);
        })
    }
    changeHotelIdHandler=(event) =>{
        this.setState({hotelId: event.target.value});        

    }
    changeRoomIdHandler=(event) =>{
        this.setState({roomCategoryId: event.target.value});
        // this.setState({ success: true });

    }
    changeDateHandler=(event) =>{
        this.setState({date: event.target.value});
        // this.setState({ success: true });

    }

    render(){
        return (
            <div>
                <div className = "container"> 
                    <div  className = "row">
                        <div  className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Get Price</h3>
                            <div className="card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Hotel Id</label>
                                        <input placeholder="Hotel Id" name="hotelId" className="form-control"
                                            value={this.state.hotelId} onChange={this.changeHotelIdHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Room Category Id</label>
                                        <input placeholder="Room Category Id" name="roomCategoryId" className="form-control"
                                            value={this.state.roomCategoryId} onChange={this.changeRoomIdHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Date </label>
                                        <input placeholder="Date" name="date" className="form-control"
                                            value={this.state.date} onChange={this.changeDateHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.submitEntries}>Show</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.success && <div>
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
                                        employee =>
                                        <tr key = {employee.hotelId}>
                                            <td> { employee.hotelId} </td>
                                            <td> { employee.roomCategoryId} </td>
                                            <td> { employee.occupancy} </td>
                                            <td> { employee.date} </td>
                                            <td> { employee.price} </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                </div>
            </div>}
            </div>
        );                 
    }
}
export default PriceComponent;




// import React, { Component } from 'react';
// import Getdataservice from '../services/Getdataservice';
// import HotelService from "../services/HotelService";
// class GetDataById extends Component {
//     constructor(props)
//     {
//         super(props)
//         this.state = {
//             hotel_id : '',
//             room_category_id : '',
//             date :'',
//             hotels:'',
//             check:'true',
//             success: false
//              }
//         this.changeHotelidhandler = this.changeHotelidhandler.bind(this);
//         this.saveClicked = this.saveClicked.bind(this);
//     }
//     saveClicked = (e) => {
//         e.preventDefault();
//         let obj = {hotel_id: this.state.hotel_id, room_category_id: this.state.room_category_id,date: this.state.date}
//           console.log(obj);
//         Getdataservice.getDatabyid(obj).then(res =>{
//             this.setState({hotels: res.data})
//             this.setState({ success: true });
//             this.setState({ check: false });
//             console.log(res);
//         });
//     }
//     changeHotelidhandler(event)
//     {
//             //console.log(this.state);
//             this.setState(
//                 {
//                     [event.target.name]
//                         : event.target.value
//                 }
//             )
//     }
//     render() {
//         return (
//             <div>
//             <div className="container">
//             <div className = "row">
//                 <div className="card col-md-6 offset-md-3 offset-md-3">
//                   <h3 className ="text-center"> ENTER FOLLOWING DETAILS </h3>
//                   <div className = "card-body">
//                     <form>
//                         <div className="form-group">
//                             <label>Hotel Id</label>
//                             <input placeholder="hotel id" name="hotel_id" className = "form-control" value={this.state.hotel_id} onChange={this.changeHotelidhandler} />
//                             <label>Room Category Id</label>
//                             <input placeholder="room Category id" name="room_category_id" className = "form-control" value={this.state.room_category_id} onChange={this.changeHotelidhandler} />
//                             <label>Date</label>
//                             <input placeholder="Date" name="date" className = "form-control" value={this.state.date} onChange={this.changeHotelidhandler} />
//                         </div>
//                         <button className="btn btn-success" style={{marginLeft:"30px"}}onClick={this.saveClicked}>SUBMIT</button>
//                     </form>
//                   </div>
//                 </div>
//             </div>
//             </div>
//             {this.state.success && <div>
//                <table className = "table table-striped table-bordered">
//                 <div className = "container">
//                 <h3 className ="text-center" style={{marginTop:"50px"}}> Price for Single Occupancy Room = {this.state.hotels.prices.price1}</h3>
//                 <h3 className ="text-center"> Price for Double Occupancy Room = {this.state.hotels.prices.price2}</h3>
//                 <h3 className ="text-center"> Price for Triple Occupancy Room = {this.state.hotels.prices.price3}</h3>
//                 <h3 className ="text-center"> Created At = {this.state.hotels.created_at}</h3>
//                 <h3 className ="text-center">Updated At = {this.state.hotels.updated_at}</h3>
//                 </div>
//                 </table>
//                 </div>}
//            </div>
//         );
//     }
// }
// export default GetDataById;