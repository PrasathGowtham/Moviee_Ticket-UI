import React from "react";
import Loginpage from "./login";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./home.css";
function Commonpage() {
    const navigate = useNavigate();
    return (
        <div className="common row" >
            <div className="col-md-12" >
                <nav className="navbar navbar-expand-lg navbar-light bg-light"  >
                    <div className="container-fluid" >
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="OpText"><p>Joy Booking</p></div>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ paddingLeft: "30px" }}>
                                <li className="nav-item" >
                                    <a className="nav-link" href="#" tabindex="-1" aria-disabled="true" onClick={() => navigate("/home")}>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Orders</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Offers</a>
                                </li>
                                <li className="nav-item" style={{paddingTop:"6px"}}>
                                        <select class="form-select form-select-sm" aria-label=".form-select-sm example" style={{paddingTop:"5px"}}>
                                            <option selected>Location</option>
                                            <option value="1">Coimbatore</option>
                                            <option value="2">Tiurpur</option>
                                            <option value="3">Pollachi</option>
                                        </select>
                                    </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                            <a className="nav-link active" aria-current="page" href="#" style={{ paddingLeft: "10px" }}><button className="btn btn-outline-success" type="submit" onClick={()=>navigate("/")}>Logout</button></a>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Commonpage;