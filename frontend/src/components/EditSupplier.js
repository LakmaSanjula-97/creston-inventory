import React, { Component } from 'react'
import axios from 'axios';

export default class EditSupplier extends Component {

    constructor(props) {
        super(props);

        this.onChangeSupid = this.onChangeSupid.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeRegdate = this.onChangeRegdate.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        

        this.state = {
            supid: '',
            name: '',
            email: '',
            phone: '',
            regdate: '',
            address: '',
            category: ''
            
        };

    }

    componentDidMount(){
        axios.get('http://localhost:8070/supplier/get/' + this.props.match.params.id)
            .then(response =>{
                this.setState({
                    supid: response.data.supplier.supid,
                    name: response.data.supplier.name,
                    email: response.data.supplier.email,
                    phone: response.data.supplier.phone,
                    regdate: response.data.supplier.regdate,
                    address: response.data.supplier.address,
                    category: response.data.supplier.category
               
                })
            })
            .catch(function(error){
                console.log(error)
            });
    }

    onChangeSupid(e){
        this.setState({supid:e.target.value});
    }
    onChangeName(e){
        this.setState({name:e.target.value});
    }
    onChangeEmail(e){
        this.setState({email:e.target.value});
    }
    onChangePhone(e){
        this.setState({phone:e.target.value});
    }
    onChangeRegdate(e){
        this.setState({regdate:e.target.value});
    }
    onChangeAddress(e){
        this.setState({address:e.target.value});
    }
    onChangeCategory(e){
        this.setState({category:e.target.value});
    }
   

    onSubmit(e){
        e.preventDefault();
        const obj = {
            supid: this.state.supid,
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            regdate: this.state.regdate,
            address: this.state.address,
            category: this.state.category,
            
        };

        axios.put("http://localhost:8070/supplier/update/"+this.props.match.params.id, obj)
        .then(res =>console.log(res.data),
        alert("Update Successfully"));

        this.props.history.push('/supplierview');
    }





    render() {

        return(

            <div className ="container" id = "addSupplier-form1">
    
                <form onSubmit={this.onSubmit}>

                    <h2 style={{'textAlign':'center'}}>
                        Edit Supplier Data
                    </h2>
        
                    <div className="form-group">
                        <label htmlFor="name">Supplier Id</label>
                        <input type="text" className="form-control" id="supid"  required
                            value={this.state.supid}
                            onChange = {this.onChangeSupid}
    
                        />
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="name">Supplier Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Name" required
                            value={this.state.name}
                            onChange = {this.onChangeName}
                        />
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email"  placeholder="Email Adderss" pattern="^[^ ]+@[^ ]+\.[a-z]{2,6}$" required
                            value={this.state.email}
                            onChange = {this.onChangeEmail}
                            
                        />
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" className="form-control" id="phone" pattern="[0-9]{10}" maxLength="10" placeholder="Phone Number" required
                            value={this.state.phone}
                            onChange = {this.onChangePhone}
                        />
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="regdate">Register Date</label>
                        <input type="date" className="form-control" id="regdate" required
                            value={this.state.regdate}
                            onChange = {this.onChangeRegdate}    
                        />
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="Address"  required
                            value={this.state.address}
                            onChange = {this.onChangeAddress}   
                        />
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="category">Supplier Type</label>
                        <select className="form-control" id="category" placeholder="" required
                            value={this.state.category}
                            onChange = {this.onChangeCategory}
                        >
                            <option value="furniture">Furniture</option>
                            <option value="kitchenitems">Kitchen Items</option>
                            <option value="electricalitems">Electrical Items</option>
                            <option value="decorationitems">Decoration Items</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-outline-success" id = "addSupplier-btn1">UPDATE</button>
                </form>
                
            </div>
        )
    
    }
}
