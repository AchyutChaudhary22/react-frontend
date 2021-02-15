import React, { Component } from 'react';
import ListHotelComponent from './ListHotelComponent';

class HomePage extends Component {
    constructor(props){
        super(props)

        this.allHotels = this.allHotels.bind(this);
        this.getPrice = this.getPrice.bind(this);
    }
    allHotels(){
        this.props.history.push('/all-hotels');
    }
    getPrice(){
        this.props.history.push('/get-price');
    }
    render() {
        return (
            <div>
                <h1 className="text-center">Welcome to Hotel Management App</h1>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.allHotels}> All Hotels </button>
                </div>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.getPrice}> Get Price </button>
                </div>
            </div>
        );
    }
}

export default HomePage;