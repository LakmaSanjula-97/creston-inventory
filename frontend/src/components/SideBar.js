import React from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import {Link} from 'react-router-dom';


export const SideBar = ({ sideNavExpanded, setSideNavExpanded }) => {
  return (
    <>
     
      <SideNav style={{'backgroundColor': '#0f0e0e','position':'fixed'}}
        onToggle={() => {
          setSideNavExpanded(!sideNavExpanded);
        }}
        expanded={sideNavExpanded}
        
      >
         
        <SideNav.Toggle />
        <SideNav.Nav >


           <NavItem eventKey="dashboard" id="NavBar-text">
            <NavIcon>
              <i className="fa fa-dashboard blue-text" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText >DashBoard</NavText>
          </NavItem>
          
          

          <NavItem eventKey="suppliermanagement">

            <NavIcon>
              
                <i className="fa fa-truck blue-text" style={{ fontSize: "1.75em" }} />
              
            </NavIcon>
            <NavText>
              Supplier Management
            </NavText>

            <NavItem eventKey="suppliermanagement/addsupplier">
              <NavText>
                <a><Link to={"/supplieradd"}>Add Supplier</Link></a>
              </NavText>
            </NavItem> 

            <NavItem eventKey="suppliermanagement/viewsuppliers">
              <NavText>
                <a><Link to={"/supplierview"}>View Suppliers</Link></a>
              </NavText>
            </NavItem>

            {/* <NavItem eventKey="suppliermanagement/updatesuppliers">
              <NavText>
                <a href = "/supplierupdate">Update Suppliers </a>
              </NavText>
            </NavItem> */}

          </NavItem>

          <NavItem eventKey="itemmanagement">

            <NavIcon>
              
                <i className="fa fa-code blue-text" style={{ fontSize: "1.75em" }} />
              
            </NavIcon>
            <NavText>
              Item Management
            </NavText>

            <NavItem eventKey="itemmanagement/additems">
              <NavText>
                <a><Link to={"/itemadd"}>Add Items</Link></a>
              </NavText>
            </NavItem>

            <NavItem eventKey="itemmanagement/viewitems">
              <NavText>
                <a><Link to={"/itemview"}>View Items</Link></a>
              </NavText>
            </NavItem>

          </NavItem>
          
        </SideNav.Nav>
      
      </SideNav>
      
      
    </>
  );
};

export default SideBar;