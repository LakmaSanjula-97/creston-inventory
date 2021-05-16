import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import TableRawItem from './TableRawItem';
import jsPDF from 'jspdf';  
import html2canvas from 'html2canvas';

export default class AllItems extends Component {

    constructor(props){
        super(props);
        this.state = {items:[]};
    }

    printDocument() {  
        const input = document.getElementById('viewtable');  
        html2canvas(input)  
          .then((canvas) => {  
            var imgWidth = 200;  
            var pageHeight = 290;  
            var imgHeight = canvas.height * imgWidth / canvas.width;  
            var heightLeft = imgHeight;  
            const imgData = canvas.toDataURL('image/png');  
            const pdf = new jsPDF('p', 'mm', 'a4')  
            var position = 0;  
            var heightLeft = imgHeight;  
            pdf.addImage(imgData, 'JPEG', 4, position, imgWidth, imgHeight);  
            pdf.save("download.pdf");  
          });  
      }

    componentDidMount(){
        axios.get('http://localhost:8070/item/').then(response =>{
            this.setState({items:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    componentDidUpdate(){
        axios.get('http://localhost:8070/item/').then(response =>{
            this.setState({items:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }



    AllItems(){
        return this.state.items.map(function(currentItems, i){
            return <TableRawItem items = {currentItems} key={i}/>
        });
    }

    render(){
        return(
            <div>

                <button onClick={this.printDocument} style={{marginTop: "10px", borderRadius:"5px", height: "1cm", marginLeft: "1.5cm"}} variant="contained" color="primary">Generate PDF</button>

                <div id="viewtable">
                    <h3 style={{'textAlign':'center'}}>
                        Purchased Item Details
                    </h3>
                        
                    <br></br>
                    <table className = "table table-striped" id="addSupplier-viewtable" style={{'fontSize':'14px', 'padding':'8px',border: '0.5px solid black'}}>
                        <thead>
                        
                            <tr>
                            <th>Item Code</th>
                            <th>Item Name</th>
                            <th>Supplier Id</th>
                            <th>Purchased Date</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th>Total_Amount</th>     
                            </tr>

                        </thead>
                        <tbody>
                            {this.AllItems()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}