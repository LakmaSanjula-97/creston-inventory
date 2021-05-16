import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';





export default class ViewAllSuppliers extends Component {

    constructor(props){
        super(props);
        this.state = {suppliers: [], searchId: ''};
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
   //delete supplier by id
    deleteSupplier=(id)=>{
        axios.delete(`http://localhost:8070/supplier/delete/${id}`).then((res) =>{
        
            alert("Delete Successfully");
            
        })
    
   }
    searchSupplierCategory(event){
    this.setState({ searchId: event.target.value.substr(0,
        20)});
    }
    
    // filterData(suppliers, searchKey){

    

    //     const result = suppliers.filter((sup) =>
    //     sup.name.includes(searchKey) ||
    //     sup.supid.includes(searchKey) ||
    //     sup.name.toLowercase().includes(searchKey) ||  
    //     sup.supid.toLowercase().includes(searchKey))

    //     this.setState({suppliers: result})

    // }

    // handleSearchArea=(e)=>{
    //      const searchKey = e.currentTarget.value;
    //      axios.get("http://localhost:8070/supplier/").then(res=>{

    //      if(res.data.success){
    //          this.filterData(res.data, searchKey)

    //      }

    //     });
        
    // }


    

    render(){
        let filtercategory = this.state.suppliers.filter((
            p)=>{
                return p.category.indexOf(this.state.
                    searchId)!==-1;
            }
        );

        console.log(this.state.suppliers);
        return (
            <div>
                <div className ="container">
                    <div className="input-group rounded" >
                
                        <input type="search" className="form-control rounded" placeholder="Search by Category" aria-label="Search" style={{width:"8cm", marginLeft:"27cm"}}  value={this.state.searchId} onChange={this.searchSupplierCategory.bind(this)}

                        // onChange={this. handleSearchArea}

                        // aria-describedby="search-addon" 
                        />
                
                    </div>
                </div>

                <div>
                    <a style={{ marginLeft:"2cm"}}> <Link to={"/allsuppliersdetails"}>Get Report</Link> </a>
                </div>
                <h2 style={{'textAlign':'center'}}>
                    Supplier Details
                </h2>
                <table className="table table-striped" id="addSupplier-viewtable" style={{'fontSize':'14px', 'padding':'8px',border: '0.5px solid black', marginTop:'1.5cm'}}>
                    <thead>
                        <tr >
                            <th > &nbsp;&nbsp; </th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>PhoneNumber</th>
                            <th>RegisterDate</th>
                            <th>Address</th>
                            <th>Category</th>
                            <th>Action</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        {filtercategory.map((p, index)=>{
                            return <tr key={index}>
                                <td>{index+1}</td>
                                <td>{p.supid}</td>
                                <td>{p.name}</td>
                                <td>{p.email}</td>
                                <td>{p.phone}</td>
                                <td>{p.regdate}</td>
                                <td>{p.address}</td>
                                <td>{p.category}</td>
                               

                                <td>
                                <a className="btn btn-warning" id="addSupplier-links"><Link to={`/supupdate/${p._id}`}> 
                                    <i className="fa fa-edit"></i>&nbsp; 
                                </Link></a>
                                &nbsp;&nbsp;&nbsp;
                                <a className="btn btn-danger" id="addSupplier-links"  onClick={() => this.deleteSupplier(p._id)}> 
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
