import React, {useState} from 'react';
import axios from "axios";

export default function AddSupplier() {


    const [supid, setSupid] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [regdate, setRegdate] = useState("");
    const [address, setAddress] = useState("");
    const [category, setCategory] = useState("");


    function sendData(e){
        e.preventDefault();
        
        const newSupplier = {

            supid,
            name,
            email,
            phone,
            regdate,
            address,
            category
    
        }

        axios.post("http://localhost:8070/supplier/add", newSupplier).then(()=>{
            alert("Supplier Added")

            

            
        }).catch((err)=>{
            alert(err)
        })

        // axios.post("http://localhost:8070/supplier/add", newSupplier).then(()=>{
        //     alert("Supplier Added")
        // }).catch((err)=>{
        //     alert(err)
        // })

      

    }


    return(

        <div className ="container" id = "addSupplier-form1">

            <form onSubmit={sendData}>

                <h2 style={{'textAlign':'center'}}>
                    Add Supplier Data
                </h2>

                <div className="form-group">
                    <label htmlFor="name">Supplier Id</label>
                    <input type="text" className="form-control" id="supid" required
                        onChange = {(e) => {
                            setSupid(e.target.value);
                        }}

                    />
                </div>

                <div className="form-group">
                    <label htmlFor="name">Supplier Name</label>
                    <input type="text" className="form-control" id="name" required
                        onChange = {(e) => {
                            setName(e.target.value);
                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" pattern="^[^ ]+@[^ ]+\.[a-z]{2,6}$" required 
                        onChange = {(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" className="form-control" id="phone" pattern="[0-9]{10}" required maxLength="10"
                        onChange = {(e) => {
                            setPhone(e.target.value);
                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="regdate">Register Date</label>
                    <input type="date" className="form-control" id="regdate" 
                        onChange = {(e) => {
                            setRegdate(e.target.value);
                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" required
                        onChange = {(e) => {
                            setAddress(e.target.value);
                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="category">Supplier Type</label>
                    <select className="form-control" id="category" required onChange = {(e) => {
                            setCategory(e.target.value);
                        }}>
                        <option>Select Type</option>
                        <option value="furniture">Furniture</option>
                        <option value="kitchenitems">Kitchen Items</option>
                        <option value="electricalitems">Electrical Items</option>
                        <option value="decorationitems">Decoration Items</option>
                    </select>
                </div>
                <br></br>
                <button type="submit" className="btn btn-outline-success" id = "addSupplier-btn1">SAVE</button>
            </form>
            
        </div>
    )
}