import React, { useState } from 'react';
//import NavBar from './components/NavBar';
import './styles/addSupplier.css'
import './styles/NavBar.css'
import AddSupplier from './components/AddSupplier';
import AddItem from './components/AddItem';
import AllSuppliers from './components/AllSuppliers'
import AllItem from './components/AllItems'
import EditSupplier from './components/EditSupplier'
import EditItem from './components/EditItem'
//import DeleteItem from './components/DeleteItem'
import {BrowserRouter as Router, Route} from "react-router-dom"
import CurrentDateTime from './components/CurrentDateTime'

import ViewAllItems from './components/ViewAllItems'
import ViewAllSuppliers from './components/ViewAllSuppliers'

import SideBar from "./components/SideBar";

function App() {


  const [sideNavExpanded, setSideNavExpanded] = React.useState(true);

  function handleResize() {
    if (window.innerWidth <= 375) {
      setSideNavExpanded(false);
    }
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize(); // on-component-mount, check already to see if user has a small device

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // initialize event listeners on-mount & clean on-unmount

  const contentStyle = {
    marginLeft: sideNavExpanded ? "250px" : "70px", // arbitrary values
    transition: "margin 0.2s ease"
  };


  return (
    <Router>
      <div>
      <SideBar
          setSideNavExpanded={setSideNavExpanded}
          sideNavExpanded={sideNavExpanded}
        />
      
        {/* <NavBar/> */}
        <div style={contentStyle}>

          <CurrentDateTime/>
        
          <Route path="/supplieradd" exact component={AddSupplier}/>
          <Route path="/allsuppliersdetails" exact component={AllSuppliers}/>

          <Route path="/supplierview" exact component={ViewAllSuppliers}/>

          <Route path="/supupdate/:id" exact component={EditSupplier}/>
          
          

          <Route path="/itemadd" exact component={AddItem}/>
          <Route path="/allitemdetails" exact component={AllItem}/> 
          <Route path="/itemupdate/:id" exact component={EditItem}/>
          {/* <Route path="/itemdelete/:id" exact component={DeleteItem}/> */}


          <Route path="/itemview" exact component={ViewAllItems}/> 

        </div> 
      
      </div>

    </Router>
    
  );
}

export default App;
