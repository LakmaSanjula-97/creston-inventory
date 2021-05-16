import React, { Component } from 'react';
import axios from 'axios';

export default class TableRow extends Component{




    render() {


        return(

            <tr>
                <td>{this.props.suppliers.supid}</td>
                <td>{this.props.suppliers.name}</td>
                <td>{this.props.suppliers.email}</td>
                <td>{this.props.suppliers.phone}</td>
                <td>{this.props.suppliers.regdate}</td>
                <td>{this.props.suppliers.address}</td>
                <td>{this.props.suppliers.category}</td>
              

            </tr>

        )
    }
}