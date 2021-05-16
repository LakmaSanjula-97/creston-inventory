import React, { Component } from 'react'
import axios from 'axios';

export default class EditItem extends Component {

    constructor(props) {
        super(props);

        this.onChangeItemcode = this.onChangeItemcode.bind(this);
        this.onChangeItemname = this.onChangeItemname.bind(this);
        this.onChangeSupid = this.onChangeSupid.bind(this);
        this.onChangeBuydate = this.onChangeBuydate.bind(this);
        this.onChangeUnitprice = this.onChangeUnitprice.bind(this);
        this.onChangeQty = this.onChangeQty.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        

        this.state = {
            itemcode:'',
            itemname:'',
            supid:'',
            buydate:'',
            unitprice:'',
            qty:''
            
        };

    }

    componentDidMount(){
        axios.get('http://localhost:8070/item/get/' + this.props.match.params.id)
            .then(response =>{
                this.setState({
                   
                    itemcode:response.data.item.itemcode,
                    itemname:response.data.item.itemname,
                    supid:response.data.item.supid,
                    buydate:response.data.item.buydate,
                    unitprice:response.data.item.unitprice,
                    qty:response.data.item.qty,
                
               
                })
            })
            .catch(function(error){
                console.log(error)
            });
    }

    onChangeItemcode(e){
        this.setState({itemcode:e.target.value});
    }
    onChangeItemname(e){
        this.setState({itemname:e.target.value});
    }
    onChangeSupid(e){
        this.setState({supid:e.target.value});
    }
    onChangeBuydate(e){
        this.setState({buydate:e.target.value});
    }
    onChangeUnitprice(e){
        this.setState({unitprice:e.target.value});
    }
    onChangeQty(e){
        this.setState({qty:e.target.value});
    }
   
   

    onSubmit(e){
        e.preventDefault();
        const obj = {
            
            itemcode: this.state.itemcode,
            itemname: this.state.itemname,
            supid: this.state.supid,
            buydate: this.state.buydate,
            unitprice: this.state.unitprice,
            qty: this.state.qty,
           
            
        };

        axios.put("http://localhost:8070/item/update/"+this.props.match.params.id, obj)
        .then(res =>console.log(res.data),
        alert("Update Successfully"));

        this.props.history.push('/itemview');
    }

    render() {

        return(

            <div className ="container" id = "addSupplier-form1">

                <form onSubmit={this.onSubmit}>

                    <h2 style={{'textAlign':'center'}}>
                        Update Item Details
                    </h2>

                    <div className="form-group" required>
                        <label htmlFor="name">Item Code</label>
                        <input type="text" className="form-control" id="itemcode" placeholder=""
                          value={this.state.itemcode}
                          onChange = {this.onChangeItemcode}
                        />
                    </div>

                    <div className="form-group" required>
                        <label htmlFor="itemname">Item Name</label>
                        <input type="text" className="form-control" id="itemname" placeholder=""
                         value={this.state.itemname}
                         onChange = {this.onChangeItemname}
                        />
                    </div>

                    <div className="form-group" required>
                        <label htmlFor="supid">Supplier Id</label>
                        <input type="text" className="form-control" id="supid"  placeholder="" 
                            value={this.state.supid}
                            onChange = {this.onChangeSupid}
                        />
                    </div>

                    <div className="form-group" required>
                        <label htmlFor="buydate">Buy Date:</label>
                        <input type="date" className="form-control" id="buydate" placeholder="" 
                            value={this.state.buydate}
                            onChange = {this.onChangeBuydate}
                        />
                    </div>

                    <div className="form-group" required>
                        <label htmlFor="unitprice">Unit Price</label>
                        <input type="text" className="form-control" id="unitprice" 
                            value={this.state.unitprice}
                            onChange = {this.onChangeUnitprice}
                         
                        />
                    </div>

                    <div className="form-group" required>
                        <label htmlFor="qty">Quantity</label>
                        <input type="text" className="form-control" id="qty" 
                            value={this.state.qty}
                            onChange = { this.onChangeQty}
                        />
                    </div>

                  

                    <button type="submit" className="btn btn-outline-success" id = "addSupplier-btn1">UPDATE</button>
                </form>

            </div>
        )
    
    }
}
