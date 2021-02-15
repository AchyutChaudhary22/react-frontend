import React, { Component } from 'react';
import HotelService from '../services/HotelService';

class CsvStatusComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            csv: []
        }
    }
    componentDidMount(){
        HotelService.getStatus().then((res) => {
            this.setState({csv: res.data});
            console.log(res.data);
        });
    }
    render() {
        return (
            <div>
                <h2 className="text-center">CSV Upload List</h2> 
                <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th> Id</th>
                                <th> CSV File Name </th>
                                <th> Incorrect Rows</th>
                                <th> Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.csv.map(
                                        csv =>
                                        <tr key = {csv.id}>
                                            <td> { csv.id} </td>
                                            <td> { csv.fileName} </td>
                                            {/* <td> { csv.rowNoList.map()} </td> */}
                                            <td> {csv.rowNoList.map(d => <li key={d}>{d}</li>)}</td>
                                            <td> { csv.status ? "success":"failure"} </td>
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

export default CsvStatusComponent;