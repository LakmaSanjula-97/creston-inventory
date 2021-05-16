import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';



export default class ViewAllItems extends Component {

    constructor(props){
        super(props);
        this.state = {items: [], searchId:''};
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

    deleteItem=(id)=>{
        axios.delete(`http://localhost:8070/item/delete/${id}`).then((res) =>{
            
                alert("Delete Successfully");
                
            })
        
    }
    searchItemCode(event){
        this.setState({ searchId: event.target.value.substr(0,
            20)});
    }

    //    filterData(items, searchKey){

    

    //     const result = items.filter((itm) =>
    //     itm.itemname.includes(searchKey) ||
    //     itm.supid.includes(searchKey) ||
    //     itm.itemcode.includes(searchKey) ||
    //     itm.itemname.toLowercase().includes(searchKey) ||  
    //     itm.itemcode.toLowercase().includes(searchKey))

    //     this.setState({suppliers: result})

    // }

    // handleSearchArea=(e)=>{
    //      const searchKey = e.currentTarget.value;
    //      axios.get("http://localhost:8070/item/").then(res=>{

    //      if(res.data.success){
    //          this.filterData(res.data, searchKey)

    //      }

    //     });
        
    // }




    
    render(){
        let filteritemcode = this.state.items.filter((
            p)=>{
                return p.itemcode.indexOf(this.state.
                    searchId)!==-1;
            }
        );
        
        console.log(this.state.items);
        return (
            <div>
                <div>
                    <a style={{ marginLeft:"2cm"}}> <Link to={"/allitemdetails"}>Get Report</Link> </a>
                    
                    <input className="form-control" type="search" placeholder="Search" name="searchQuery" style={{width:"8cm", marginLeft:"30cm"}} value={this.state.searchId} onChange={this.searchItemCode.bind(this)}/>
                     
                     

                     
                </div>
                <h2 style={{'textAlign':'center'}}>
                    All Purchased Item Details
                </h2>
                <table className="table table-striped" id="addSupplier-viewtable" style={{'fontSize':'14px', 'padding':'8px',border: '0.5px solid black', marginTop:'0.5cm'}}>
                    <thead>
                        <tr>
                            <th>   </th>
                            <th>Item Code</th>
                            <th>Item Name</th>
                            <th>Supplier Id</th>
                            <th>Purchased Date</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th>Total_Amount</th>
                            <th>Action</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        {filteritemcode.map((p, index)=>{
                            return <tr key={index}>
                                <td>{index+1}</td>
                                <td>{p.itemcode}</td>
                                <td>{p.itemname}</td>
                                <td>{p.supid}</td>
                                <td>{p.buydate}</td>
                                <td>{p.unitprice}</td>
                                <td>{p.qty}</td>
                                <td>{p.totalpayment}</td>
                                
                               
                                <td>
                                <a className="btn btn-warning" id="addSupplier-links"><Link to={`/itemupdate/${p._id}`}>
                                    <i className="fa fa-edit"></i>&nbsp; 
                                </Link></a>
                                    &nbsp;

                                <a className="btn btn-danger" id="addSupplier-links"  onClick={() => this.deleteItem(p._id)}>
                                    <i className="fa fa-trash-o"></i>&nbsp;
                                </a>
                                    
                                </td>


                            </tr>
                        })}
                    </tbody>

                </table>
            </div>
        );
    }
}
