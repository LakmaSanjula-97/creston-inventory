import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import TableRow from './TableRow';
import jsPDF from 'jspdf';  
import html2canvas from 'html2canvas';


export default class AllSuppliers extends Component {

    constructor(props){
        super(props);
        this.state = {suppliers:[]};
    }

    printDocument() {  
        const input = document.getElementById('printtable');  
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
        axios.get('http://localhost:8070/supplier/').then(response =>{
            this.setState({suppliers:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    componentDidUpdate(){
        axios.get('http://localhost:8070/supplier/').then(response =>{
            this.setState({suppliers:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    


    
    AllSuppliers(){
        return this.state.suppliers.map(function(currentSuppliers, i){
            return <TableRow suppliers = {currentSuppliers} key={i}/>
        });
    }

 


    render(){
        
        return(


            <div>


                <div className ="container">
                
                </div>

                <button onClick={this.printDocument} style={{marginTop: "10px", borderRadius:"5px", height: "1cm", marginLeft: "1.5cm"}} variant="contained" color="primary">Generate PDF</button>

                <div id = "printtable">
                <h2 style={{'textAlign':'center'}}>
                    Supplier Details
                </h2>
                <br></br>
                <table className = "table table-striped" id="addSupplier-viewtable" style={{'fontSize':'14px', 'padding':'8px',  border: '0.5px solid black'}}>
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>PhoneNumber</th>
                        <th>RegisterDate</th>
                        <th>Address</th>
                        <th>Category</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        {this.AllSuppliers()}
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
    
}