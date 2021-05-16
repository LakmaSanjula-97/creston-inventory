import React, { Component } from 'react';
import axios from 'axios';

export default class TableRawItem extends Component{


    render() {

        return(
            <tr>
                <td>{this.props.items.itemcode}</td>
                <td>{this.props.items.itemname}</td>
                <td>{this.props.items.supid}</td>
                <td>{this.props.items.buydate}</td>
                <td>{this.props.items.unitprice}</td>
                <td>{this.props.items.qty}</td>
                <td>{this.props.items.totalpayment}</td>
              

            </tr>

        )
    }
}