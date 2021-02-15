import React, { Component } from 'react';
import HotelService from '../services/HotelService';

class CsvComponent extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         file: null
    //     }
    //     this.handleFile=this.handleFile.bind(this);
    //     this.handleUpdate=this.handleUpdate.bind(this);
    // }
    // handleFile(e){
    //     let file
    //     changeHotelIdHandler=(event) =>{
    //         this.setState({hotelId: event.target.value});        
    //     }
    // }
    state = {
        file:null
    }

    handleFile=(e) =>{
        let file = e.target.files[0]
        this.setState({file: file});   
        console.log(file.name);
    }

    handleUpdate(e){
        let file = this.state.file.name
        console.log(file);
        HotelService.sendCsv(file).then(res =>{
            console.log(res);
            this.props.history.push('/');
        })
    }
    render() {
        return (
            <div>
                <div className = "container"> 
                    <div  className = "row">
                        <div  className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Upload CSV</h3>
                            <div className="card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Select File</label>
                                        <input type="file" name="file" onChange={(e)=>this.handleFile(e)}/>
                                    </div>
                                    <button className="btn btn-primary" onClick={(e)=>this.handleUpdate(e)}>Upload</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default CsvComponent;
