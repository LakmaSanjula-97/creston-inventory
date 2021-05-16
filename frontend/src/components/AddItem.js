import React, {useState} from 'react';
import axios from "axios";

export default function AddItem() {


    const [itemcode, setItemcode] = useState("");
    const [itemname, setItemname] = useState("");
    const [supid, setSupid] = useState("");
    const [buydate, setBuydate] = useState("");
    const [unitprice, setUnitprice] = useState("");
    const [qty, setQty] = useState("");
    const [totalpayment, setTotalpayment] = useState("");


    function sendData(e){
        e.preventDefault();
        
        const newItem ={
            itemcode,
            itemname,
            supid,
            buydate,
            unitprice,
            qty,
            totalpayment
        }

        

        axios.post("http://localhost:8070/item/add", newItem).then(()=>{
            alert("Item Added")

            
        }).catch((err)=>{
            alert(err)
        })

      

    }

    return(

        <div className ="container" id = "addSupplier-form1">

            <form onSubmit={sendData}>

                <h2 style={{'textAlign':'center'}}>
                    Add Item Details
                </h2>

                <div className="form-group">
                    <label htmlFor="name">Item Code</label>
                    <input type="text" className="form-control" id="itemcode" placeholder="" required
                     onChange = {(e) => {
                        setItemcode(e.target.value);
                    }}   
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="itemname">Item Name</label>
                    <input type="text" className="form-control" id="itemname" placeholder="" required
                     onChange = {(e) => {
                        setItemname(e.target.value);
                    }}  
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="supid">Supplier Id</label>
                    <input type="text" className="form-control" id="supid"  placeholder="" required
                    onChange = {(e) => {
                        setSupid(e.target.value);
                    }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="buydate">Buy Date:</label>
                    <input type="date" className="form-control" id="buydate" placeholder="" required
                     onChange = {(e) => {
                        setBuydate(e.target.value);
                    }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="unitprice">Unit Price</label>
                    <input type="text" className="form-control" id="unitprice" required
                     onChange = {(e) => {
                        setUnitprice(e.target.value);
                    }}  
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="qty">Quantity</label>
                    <input type="text" className="form-control" id="qty" required
                     onChange = {(e) => {
                        setQty(e.target.value);
                    }}  
                    />
                </div>

               

                <button type="submit" className="btn btn-outline-success" id = "addSupplier-btn1">SAVE</button>
            </form>
            
        </div>
    )
}